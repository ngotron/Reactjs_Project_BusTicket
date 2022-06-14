import {React,useEffect,useMemo, useState} from 'react'
import ProductComponent from '../componnet/ProductComponent'
import { useLocation } from 'react-router-dom';
import validatePrice from '../Core/validate';
import getAPI from '../Core/API';
export default function Find() {

    const [data,setData] = useState({
        arr:[],
        isLoad:false
    });
    // f to help get string query to 
    var containerBuy;
    function useQuery() {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();
    
        //create a fucntion to convert string to number

    useEffect(()=>{
        getAPI("").then(res=>setData({
            ...data,
            arr:res,
            isLoad:true
        }));
    },[]);

    if(data.isLoad){
        containerBuy = []
        data.arr.map(itemParent =>itemParent.web
            .filter((item)=>item.route === query.get("route")
            & parseInt(validatePrice(item.price)) <= parseInt(query.get("max"))
            & parseInt(validatePrice(item.price)) >= parseInt(query.get("min"))-1000)
            .map(item=>containerBuy.push(item)));
    }

    const renderContainer = (container)=>{
        if(container.length !== 0){
            return container.map((item,i)=>
            {
                if(i===0) return <>
                    <h2>Chúng tôi cực kỳ offer cho bạn</h2>
                    <ProductComponent 
                    car={item}
                    />
                    </>        
                else return <> 
                    <h2>Chúng tôi offer vừa vừa cho bạn</h2>
                    <ProductComponent 
                    car={item}
                    />
                </>
                }
            )
        }
        else return <h2>Hiện tại trang web chưa có tuyến xe phù hợp</h2>
    }
    return (
        <div className='container'>
        {
            data.isLoad ?
            renderContainer(containerBuy)  
            :
            "Loading..."
        }

        <br></br>
    </div>
  )
}
