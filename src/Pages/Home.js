import { useEffect,useState } from 'react';
import React from 'react'
import Menu from "../Component/Menu";
import FooterMain from "../Component/footer/footerMain";
// import Main from "./Component/Search/Main";
import Navba from "../componnet/Navba";
import Ofers from "../componnet/Ofers"
import getAPI from '../Core/API';
export default function Home() {
    const[data,setData] = useState([])
    const [select,setSelect]= useState({routeCar: "",homeCar:"",min:1000,max:500000});
    // const isLoad = useRef(false);
    const handlerRouteCar = (e)=>{
      console.log(select);
      setSelect({
        ...select,
        [e.target.name] : e.target.value
      })
    }
    useEffect(()=>{
      getAPI("").then(res => setData(res));
    },[]);

   
  return (
    <>
        <div>
        <Menu />
        <Navba handler = {handlerRouteCar} 
        select = {select} 
        data={data}></Navba>
      </div>
      <div>
        <Ofers main={data}></Ofers>
      </div>
      <div>
        <FooterMain />
      </div>
    </>
  )
}
