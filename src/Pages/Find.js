import {React,useEffect,useMemo, useState} from 'react'
import ProductComponent from '../componnet/ProductComponent'
import { useLocation } from 'react-router-dom';
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
            & parseInt(item.price) < parseInt(query.get("max")))
            .map(item=>containerBuy.push(item)));
    }
  return (
    <div className='container'>
        show :{query.get("route")}
        {
            data.isLoad ?

            containerBuy.map((item,i)=>
               {
                if(i===0) return    <>
                    <h2>Chúng tôi cực kỳ offer cho bạn</h2>
                    <ProductComponent 
                    car={item}
                    />
                    </>        
                else return  <> 
                <h2>Chúng tôi offer vừa vừa cho bạn</h2>
                <ProductComponent 
                 car={item}
                />
                </>
               }
               )
            :
            "Loading..."
        }
       
        <br></br>
    </div>
  )
}
