
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import WebVeXe from "./Pages/WebVeXe";


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
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/:string" element={<Error/>}></Route>
      <Route path="/Web/:id" element={<WebVeXe/>}></Route>
    </Routes>
    </>
  );
}

export default App;
