import { useEffect,useState } from 'react';
import axios from 'axios';
import React from 'react'
import Menu from "../Component/Menu";
import FooterMain from "../Component/footer/footerMain";
// import Main from "./Component/Search/Main";
import Navba from "../componnet/Navba";
import Ofers from "../componnet/Ofers"
export default function Home() {
    const[data,setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:4000/data')
      .then(res=> {
        setData(res.data);
        console.log(data);
      }); 
    },[])
  return (
    <>
        <div>
        <Menu />
        <Navba></Navba>
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
