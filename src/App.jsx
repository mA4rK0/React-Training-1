import { useState } from "react";
import "./App.css";
// import Article from "./components/Article";
// import Homepage from "./pages/index";
import { GlobalContext } from "./context";
import { router } from "./routers";
import { RouterProvider } from "react-router-dom";

function App() {
  // const value = false;

  const user = {
    username: "Hola",
  };

  return (
    <div className="App">
      {/* <Article />
      <Article /> */}

      {/* <Article name="joni" titles={["nu", "ni", "na", "no"]} />
      <Article name="boni" />
      <br />
      <Article name="boni" titles={["la", "li", "la", "lo"]} /> */}

      {/* {value ? "benar" : "salah"} */}
      <GlobalContext.Provider value={user}>
        {/* <Homepage /> */}
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
