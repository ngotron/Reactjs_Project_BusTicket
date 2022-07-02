import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import WebVeXe from "./Pages/WebVeXe";
import Find from "./Pages/Find";
import FooterMain from "./Component/footer/footerMain";
import Menu from './Component/Menu';
import {SendMail} from "./Pages/SendMail";
import BookingSeat from "./Pages/BookingSeat";  
import Contact from "./Component/contact/Contact";
import SelectPayment from "./Pages/SelectPayment";

function App() {

  return (
    <>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/:string" element={<Error/>}></Route>
            <Route path="/Error" element={<Error/>}></Route>
            <Route path="/Find" element={<Find/>}></Route>
            <Route path="/SendMail" element={<SendMail/>}></Route>
            <Route path="/Web/:id" element={<WebVeXe/>}></Route>
            <Route path="/BookingSeat" element={<BookingSeat/>}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/SelectPayment" element={<SelectPayment/>} />
        </Routes>
        <FooterMain></FooterMain>
    </>
  );
}

export default App;
