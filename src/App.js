import "./App.css";

import React from "react";

import Menu from "./Component/Menu";

import FooterMain from "../src/Component/footer/footerMain";
import SearchComponent from "./Component/Search/SearchComponent";
import Main from "./Component/Search/Main";
function App() {
  return (
    <>
      <div>
        <Menu />
      </div>
     {/* <div className="offers"> 
     <div className="search"> 
     <div className="search-inner"> 
          <SearchComponent></SearchComponent>
        </div>
     </div>
     </div> */}
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
