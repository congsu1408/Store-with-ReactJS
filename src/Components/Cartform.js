import React, {useState} from 'react';
import Amazon from "./Cartcomponets/amazon";
import Navbar from "./Cartcomponets/Navbar";
import Shopcart from "./Cartcomponets/shopcart";
import Cart from "./Cartcomponets/Cart";

const Cartform = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const handleClick = (item) => {
        /*cart.push(item);
        console.log(cart);*/
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item])
    };
    const handlechange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount = +d;

        if (arr[ind].amount === 0) {
            arr[ind].amount = 1;
        }
        setCart([...arr]);

    };

    return (
        <div>
            <Navbar setShow={setShow} size={cart.length}/>
            {/*<Amazon/>*/}
            {show ? (<Amazon handleClick={handleClick}/>) :
                (<Cart cart={cart} setCart={setCart} handlechange={handlechange}/>)}
            <Shopcart/>
        </div>
    );
};

export default Cartform;
