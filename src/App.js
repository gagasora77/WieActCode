import React from "react";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Partners from "./Pages/Partners";
import Program from "./Pages/Program";
import Speakers from "./Pages/Speakers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route path="/Partners" element={<Partners></Partners>}></Route>
          <Route path="/Program" element={<Program></Program>}></Route>
          <Route path="/Speakers" element={<Speakers></Speakers>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
