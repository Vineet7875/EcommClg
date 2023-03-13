import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Nav from "./Nav";
import Home from "./Home";
import Works from "./Works1";
import Works1 from "./Works";
import Specification from "./Specification";
import SamsungProducts from "./SamsungProducts";
import RedmiProducts from "./RedmiProducts";
import OppoProducts from "./OppoProducts";
import VivoProducts from "./VivoProducts";
import OneplusProducts from "./OneplusProducts";
import IphoneProducts from "./IphoneProducts";
import Below5kProducts from "./Below5kProducts";
import Between5kTo10kProducts from "./Between5kTo10kProducts"
import Between10kTo20kProducts from "./Between10kTo20kProducts"
import Between20kTo30kProducts from "./Between20kTo30kProducts"
import Between30kTo50kProducts from "./Between30kTo50kProducts"
import Above50kProducts from "./Above50kProducts";
import AllProducts from "./AllProducts";
import Cart from "./Cart";
import All from "./All.json";

import "./Nav.css"
import "./Home.css"
import "./Works.css"
import "./Products.css"
import "./Cart.css"
import "./Specification.css"

const Ecommerce = () => {
  const [CartItems, SetCartItems] = useState([])

  const handleAddProduct = (product) => {
    const exist = CartItems.find((item) => product.id === item.id)

    if (exist) {
      SetCartItems(CartItems.map((item) => product.id === item.id ? { ...exist, qty: exist.qty + 1 } : item));
    } else {
      SetCartItems([...CartItems, product]);
    }
  }

  const handleRemoveProduct = (product) => {
    const exist = CartItems.find((item) => product.id === product.id)

    if (exist) {
      if (exist.qty > 1) {
        SetCartItems(CartItems.map((item) => product.id === item.id ? { ...exist, qty: exist.qty - 1 } : item));
      } else {
        SetCartItems(CartItems.filter((item) => item.id !== product.id))
      }
    }
  }

  const handleClearProducts = () => {
    SetCartItems([])
  }

  const total_price = CartItems.reduce((price, item) => price + item.price * item.qty, 0)
  const [searchQuery, setsearchQuery] = useState("");

  const handleSearch = (handleAddProduct) => {
    setsearchQuery(handleAddProduct.target.value);
  };
  return (
    <>
      <Router>
        <Nav length={CartItems.length} />
        <div id="search">
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <Routes>
          <Route path="/SamsungProducts" element={<SamsungProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />
          <Route path="/OppoProducts" element={<OppoProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />
          <Route path="/VivoProducts" element={<VivoProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />
          <Route path="/RedmiProducts" element={<RedmiProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />
          <Route path="/OneplusProducts" element={<OneplusProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />
          <Route path="/IphoneProducts" element={<IphoneProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />
          <Route path="/Below5kProducts" element={<Below5kProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />
          <Route path="/Between5kTo10kProducts" element={<Between5kTo10kProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />
          <Route path="/Between10kTo20kProducts" element={<Between10kTo20kProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />
          <Route path="/Between20kTo30kProducts" element={<Between20kTo30kProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />
          <Route path="/Between30kTo50kProducts" element={<Between30kTo50kProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />
          <Route path="/Above50kProducts" element={<Above50kProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />

          <Route path="/AllProducts" element={<AllProducts handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} searchQuery={searchQuery} />} />

          <Route path="/Specification" element={<Specification />} />
          <Route
            path="/"
            element={
              searchQuery === "" ? (
                <>
                  <Works />
                  <Works1 />
                </>
              ) : (
                <Navigate to="/AllProducts" />
              )
            }
          />
          <Route
            path="/cart"
            element={
              searchQuery === "" ? (
                  <Cart value={CartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleClearProducts={handleClearProducts} />
              ) : (
                <Navigate to="/AllProducts" />
              )
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default Ecommerce
