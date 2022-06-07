import React, { useEffect, useState } from "react";

import axios from "axios";

import Menu from "./Component/Menu";
import FooterMain from "../src/Component/footer/footerMain";
import Main from "./Component/Search/Main";

function App() {
  const[isLoading,setIsLoading] = useState("...loading...");
  const[data,setData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/nhaXe1').then(res=>{
      console.log(res.data);
      setData(res.data)
    })
  },[])
  return (
    <>
      <div>
        <Menu />
      </div>
      <div>
        <Main></Main>
      </div>
      <div>
        <FooterMain />
      </div>
    </>
  );
}

export default App;
