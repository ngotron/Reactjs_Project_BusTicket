import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'
// import Main from "./Component/Search/Main";
import Navba from "../componnet/Navba";
import Ofers from "../componnet/Ofers"
import getAPI from '../Core/API';
export default function Home() {
    const[data,setData] = useState([]);
    const nav = useNavigate();
    const [select,setSelect]= useState(
      {routeCar: "",
      homeCar:"",
      min:1000,
      max:500000
    });
    const handlerFind = (e)=>{
      e.preventDefault();
      nav(`Find?route=${select.routeCar}&home=${select.homeCar}&min=${select.min}&max=${select.max}`)
     
      // data.map(itemParent =>itemParent.web.filter((item)=>item.route === select.routeCar).map(item=>console.log(item)) )
      //itemParent.web.filter((item)=>item.routeCar.indexOf(select.routeCar)).map(item=>console.log(item))
    }
    const handlerRouteCar = (e)=>{
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
        <Navba 
        submit = {handlerFind}
        handler = {handlerRouteCar} 
        select = {select} 
        data={data}></Navba>
      </div>
      <div>
        <Ofers main={data}></Ofers>
      </div>
      <div>
      </div>  
    </>
  )
}
