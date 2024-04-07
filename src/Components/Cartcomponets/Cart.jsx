import React, {useEffect} from "react";
import {useState} from "react";
// import "../styles/cart.css";

const Cart = ({cart, setCart, handlechange}) => {
    const [price, setprice] = useState(0);

    const handleremove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setprice(ans);
    };
    useEffect(() => {
        handlePrice();
    });
    return (
        <div>
            <article>
                {cart.map((item) => {
                    <div className="cart_box">
                        <div className="cart_img">
                            <img src="item.img" alt="" srcset=""/>
                            <p>{item.img}</p>
                        </div>
                        <div>
                            <button onClick={() => handlePrice(item, 1)}>+</button>
                            <button onClick={() => handlePrice(item, -1)}>-</button>
                            <button onClick={() => handleremove(item.id)}>Remove</button>
                        </div>
                    </div>
                })}
            </article>
        </div>
    );
};

export default Cart;
