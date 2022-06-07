import React, { useEffect, useState } from "react";



import Menu from "./Component/Menu";
import FooterMain from "../src/Component/footer/footerMain";
import Main from "./Component/Search/Main";
import Navba from "./componnet/Navba";
import Ofers from "./componnet/Ofers"
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";


function App() {

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">aaaa</Link></li>
        <li><Link to="/fff">bbbb</Link></li>
        <li><Link to="/ff33f">cccc</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/:string" element={<Error/>}></Route>
    </Routes>
    </>
  );
}

export default App;
