import "./App.css";

import React from "react";

import Menu from "./Component/Menu";

import FooterMain from "../src/Component/footer/footerMain";
function App() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <div>
        <FooterMain />
      </div>
    </>
  );
}

export default App;
