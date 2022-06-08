import { useEffect,useState } from 'react';
import React from 'react'
import Menu from "../Component/Menu";
import FooterMain from "../Component/footer/footerMain";
// import Main from "./Component/Search/Main";
import Navba from "../componnet/Navba";
import Ofers from "../componnet/Ofers"
import callAPI from '../Core/callAPI';
export default function Home() {
    const[data,setData] = useState([])
    useEffect(()=>{
      callAPI("").then(res => setData(res))
    },[]);
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
