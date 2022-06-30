import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Seat from '../componnet/Seat'
import {getAPISeats, patchAPISeats} from '../Core/API';
// import renderSeats from '../Core/renderSeats';
import {randomID} from "../Core/randomID";
export default function BookingSeat() {

    const [checkedState, setCheckedState] = useState(
        {
            isLoad:false,
            seats_arr:[],
            isChange:false,
        }
    );
    const [counter, setCounter] = useState({
        minute:1,
        second:60  
    });

    const [total,setTotal] = useState();
    
    const ref = useRef([]);

    const sessionRef =useRef(randomID())
    
    sessionStorage.setItem("user",sessionRef.current)
    
    const changeColor = (first,second)=>{
        // 
        if(first.status_s === 1 && first.user === second ){
            return true;
        }
        else if(first.status_s === 0  ){
            return true;
        }
        else if(first.status_s  === 2){
            return false;
        }
        else {
            return false
        }

    }

    const handlerOnClick = (e,position)=>{
        
        const updateCheckedStateArr = checkedState.seats_arr.map((item,index)=>
        index === position ?  
        (changeColor(item,sessionStorage.getItem("user"))
        ?{...item,status_s:item.status_s===1?0:1  , user : item.status_s===1? "": sessionStorage.getItem("user")}:item) : 
        item
        );
        
        const updateCheckedState = (pre) =>  (
            {
                ...pre,
                isChange: !checkedState.isChange,
                seats_arr: updateCheckedStateArr,
              
            }
        )

        setCheckedState((pre)=>{
            ref.current= pre;
            return updateCheckedState(pre)
        });

    }
    const renderSeats = ()=>{

        var dataShow = [];

        for (let index = 0; index < checkedState.seats_arr.length -5; index+=3) {
            dataShow[index] =   
            <>
                <div className='row-coach d-flex justify-content-between'>
                    {   checkedState.seats_arr
                        .slice(index,index+3)
                        .map((item,i)=>
                        <Seat change={(e)=>     
                        handlerOnClick(e,index+i)} 
                        seat={item} />
                    )}
                </div>
                <br></br>
            </>
        }
        
        dataShow[checkedState.seats_arr.length -5 ] = 
        <div className='row-coach d-flex justify-content-between'>
            {
                checkedState.seats_arr.slice(-5).map((item,i)=>
                <Seat change={(e)=>     
                    handlerOnClick(e,checkedState.seats_arr.length -5 +i)} 
                    seat={item} 
                />
            )}
        </div>
        
        return dataShow;
    }
    useEffect(()=>{
    
        setInterval(()=>{
            getAPISeats("").then(res=> 
                {
                  setCheckedState((pre)=>(
                      {   ...pre,
                          isLoad: true,
                          seats_arr: res,  
                      }
                  ))
                }
              )
        },2000)
    },[])

     // Third Attempts
     useEffect(() => {
        setTotal(checkedState.seats_arr.reduce((pre,currentValue)=>{

            if(currentValue.status_s && currentValue.user === sessionStorage.getItem("user")){

                return 50 + parseInt(pre);

            }
            else{

                return parseInt(pre);

            }
        },[0]));
        let timer = null
          if(counter.second > 0) timer = setInterval(() => setCounter((pre)=>({...pre,second:pre.second-1})), 1000)
          else if(counter.minute == 0 && counter.second == 0) {
            timer = setInterval(() => setCounter((pre)=>({...pre,second:pre.second-1})), 1000);
            const change = resetSeat();
            change.length !== 0 ? change.map(  (item,i)=>{
                if(i=== change.length-1 ) setCounter({
                    minute:1,
                    second:60  
                })
                return patchAPISeats(item.id,{...item,status_s:0,user:""}).then(res=>console.log(res)).catch(err=>console.log(err))
            }):setCounter({
                minute:1,
                second:60  
            })
          }
          else if(counter.second == 0) timer = setInterval(() => setCounter((pre)=>({...pre,second:60,minute:pre.minute-1})), 1000);
          
          return () =>  clearInterval(timer);
      }, [counter.second]);
   
    useEffect(()=>{

        const send = 
            checkedState.seats_arr.find((item,i) => 
            item.status_s !== ref.current.seats_arr[i].status_s )
            || "";
        
        checkedState.isLoad && send !== "" ? patchAPISeats(send.id,{...send})
        .then(res=>console.log(res))
        .catch(err=>console.log(err)):console.log(false);;

    },[checkedState.isChange]);
    
    const resetSeat = ()=>{
      return checkedState.seats_arr.filter(item=>item.user === sessionStorage.getItem("user"));
    }

    return (
        <div className='container '>
            <div className='d-flex justify-content-center'>
                <div id='area-coach' >
                    <br></br>
                    {checkedState.isLoad ? renderSeats() : "loading..."}
                </div>
            </div>
            <div className='d-flex justify-content-between'></div>
            <h3>Uoc tinh tong tien: {total}</h3>
            <div>Countdown: {`dang dem nguoc m:${counter.minute} va s:${counter.second}`}</div>
          
            {resetSeat().length !== 0 ? <Link to={"/Contact"}>Den trang tinh tien</Link> : "Vui long chon ghe"  }
        </div>
    )
}
