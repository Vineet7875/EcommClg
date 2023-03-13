import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import All from "./All.json";
const AllProducts = (props) => {
  const { searchQuery } = props;
  const filteredProducts = All.filter((product) => {
    return (
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price2.toLowerCase().includes(searchQuery.toLowerCase())
     
    );
  });
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/Specification")
  }
  return (
    <>
      <div id="product" className="Product1">
        <h1 id="Product">All Products</h1>
        <div className="Product2">
          {filteredProducts.map((product) => {
            return (

              <div key={product.id} className="cardpro">
                <img id="devices" src={product.img} alt={product.model} onClick={handleNavigation} />
                <span>{product.model}</span>
                {/* <span>&#8377; {product.price2}</span> */}
                <div id="heart" style={{ margin: 'auto', display: 'block', width: 'fit-content' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder style={{ fontSize: '30px' }} />}
                        checkedIcon={<Favorite style={{ fontSize: '25px' }} />}
                        name="checkedH"
                        onChange={(e) => (e.target.checked ? props.handleAddProduct(product) : props.handleRemoveProduct(product))}
                      />
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllProducts;