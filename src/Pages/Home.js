import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import Navba from "../componnet/Navba";
import Ofers from "../componnet/Ofers"
import getAPI from '../Core/API';
export default function Home() {
    const nav = useNavigate();
    const[data,setData] = useState([]);
    const [select,setSelect]= useState(
        {routeCar: "TP Hồ Chí Minh – Hải Phòng",
        homeCar:"",
        min:1000,
        max:500000
    });
    const handlerFind = (e)=>{
        e.preventDefault();
        parseInt(select.min) > parseInt(select.max)
        ?
        alert("voi lòng nhập đúng giá tiền tối thiểu phải thấp hơn tối đa "
        +select.min+" "+
        select.max)
    :
    nav(`Find?route=${select.routeCar}&home=${select.homeCar}&min=${select.min}&max=${select.max}`)
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
                data={data}
            />
        </div>
        <div>
            <Ofers
            main={data}/>
        </div>  
    </>
  )
}
