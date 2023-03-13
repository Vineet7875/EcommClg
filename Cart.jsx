import React from "react";
const Cart = (props) => {

    return (<>
        <div id="product" className="Cart1">
            <div className="Cart2">
                {props.value.length === 0 ? <div className="Cart"><h1>No Items in Fav</h1></div> : <div className="box1">
                    <h1></h1>
                    <h1 className="Cart">Your Fav Items</h1>
                    <button className="btn1" onClick={() => props.handleClearProducts()}>Clear Fav</button>
                </div>
                }
                <div className="card">
                    {
                        props.value.map((item, index) => {
                            return (
                                <div id={index} className="cardcart">
                                    <img id="item" src={item.img} />
                                    <div className="cardcart1" >
                                        <span>{item.model}</span>
                                        <span id="price">Price : &#8377; {item.price2}</span>
                                        <img id="heart2" src="\white1_heart.jpg" width={"20px"} height={"20px"} onClick={() => props.handleRemoveProduct(item)}></img>
                                    </div>
                                </div>
                            )
                        })
                    }</div>

            </div>

        </div>
    </>)
}
export default Cart


