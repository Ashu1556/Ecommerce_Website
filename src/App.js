import "./App.css";
import Login from "./Component/Login";
import Nav from "./Component/Nav";
import { Authoentication } from "./Component/Context";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./Component/Pages/About";
import Home from "./Component/Pages/Home";

import Product from "./Component/Pages/Product";
import ProductDetails from "./Component/Pages/ProductDetails";

import Technology from "./Component/Pages/Technology";
import Html from "./Component/Studydata/Html";
import Css from "./Component/Studydata/Css";
import Javascript from "./Component/Studydata/Javascript";
import Java from "./Component/Studydata/Java";

import Reactdata from "./Component/Studydata/Reactdata";
function App() {
  const { isLoggedIn } = useContext(Authoentication);

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/product" element={<Product />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />

            <Route path="/technology" element={<Technology />}>
              <Route path="" element={<Navigate to="html" />} />
              <Route path="html" element={<Html />} />
              <Route path="css" element={<Css />} />
              <Route path="javascript" element={<Javascript />} />
              <Route path="java" element={<Java />} />
              <Route path="react" element={<Reactdata />} />
            </Route>
          </Routes>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
