import { useState } from "react";
import "./App.css";
// import Article from "./components/Article";
import Homepage from "./pages/index";

function App() {
  // const value = false;

  return (
    <div className="App">
      {/* <Article />
      <Article /> */}

      {/* <Article name="joni" titles={["nu", "ni", "na", "no"]} />
      <Article name="boni" />
      <br />
      <Article name="boni" titles={["la", "li", "la", "lo"]} /> */}

      {/* {value ? "benar" : "salah"} */}
      <Homepage />
    </div>
  );
}

export default App;
