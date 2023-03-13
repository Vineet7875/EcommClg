import React, { useState } from "react";
import All from "./All.json";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
const Above50kProducts = (props) => {
  const { searchQuery } = props;
  const filteredProducts2 = All.filter((product) =>
  product.price1 > 50000
  );
  const filteredProducts = filteredProducts2.filter((product) =>
    product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.price2.toString().includes(searchQuery)
  );

  return (
    <>
      <div id="product" className="Product1">
        <h1 id="Product">Above50k Products</h1>
        <div className="Product2">
          {filteredProducts.map((product) => {
            return (
              <div key={product.id} className="cardpro">
                <img id="devices" src={product.img} alt={product.model_name} />
                <span>{product.model}</span>
                <span>&#8377; {product.price2}</span>
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

export default Above50kProducts;
