import {React,useEffect,useMemo, useState} from 'react'
import ProductComponent from '../componnet/ProductComponent'
import { useLocation } from 'react-router-dom';
import getAPI from '../Core/API';
export default function Find() {

    const [data,setData] = useState([]);
    // const [buy,SetBuy]= useState([]);
    // f to help get string query to 
    var isLoad = false;
    var containerBuy;
    function useQuery() {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();
    
    useEffect(()=>{
        getAPI("").then(res=>setData(res));
    },[]);

    if(data.length !== 0){
        
         containerBuy = []
         data.map(itemParent =>itemParent.web.filter((item)=>item.route ===query.get("route") & parseInt(item.price) < parseInt(query.get("max"))  ).map(item=>containerBuy.push(item)));
        // SetBuy({...buy,containerBuy});
        const a = parseInt(containerBuy[0].price)
        console.log(typeof a,a );
        isLoad = true
    }
  return (
    <div className='container'>
        show :{query.get("route")}
        {
            isLoad ?

            containerBuy.map((item,i)=>
               {
                if(i===0) return    <><h2>Chúng tôi cực kỳ offer cho bạn</h2>  <ProductComponent  car={item} name="hihihi"></ProductComponent></>        
                else 
                    return  <> <h2>Chúng tôi offer vừa vừa cho bạn</h2><ProductComponent  car={item} name="hihihi"></ProductComponent></>
               }
               )
            :
            "Loading"
        }
       
        <br></br>
    </div>
  )
}
