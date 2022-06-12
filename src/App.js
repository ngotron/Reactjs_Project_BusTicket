
import {  Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import WebVeXe from "./Pages/WebVeXe";
import Find from "./Pages/Find";
import FooterMain from "./Component/footer/footerMain";
import Menu from './Component/Menu'

function App() {

  return (
    <>
    {/* <nav>
      <ul>
        <li><Link to="/">aaaa</Link></li>
        <li><Link to="/fff">bbbb</Link></li>
        <li><Link to="/ff33f">cccc</Link></li>
      </ul>
    </nav> */}
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/:string" element={<Error/>}></Route>
      <Route path="/Error" element={<Error/>}></Route>
      <Route path="/Find" element={<Find/>}></Route>
      <Route path="/Web/:id" element={<WebVeXe/>}></Route>
    </Routes>
    <FooterMain></FooterMain>
    </>
  );
}

export default App;
