// import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/sidebar.jsx";
import Navbar from "./Components/navbar.jsx";
import Body from "./Components/body.jsx";

function App() {
  return (
    <>
    <div className="content">
      <Sidebar />
      <div className="one">
      <Navbar />
      <Body />
      </div>

    </div>
    </>
  );
}

export default App;
