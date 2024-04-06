import React from 'react';
import Amazon from "./Cartcomponets/amazon";
import Navbar from "./Cartcomponets/Navbar";
import Shopcart from "./Cartcomponets/shopcart";

const Cartform = () => {
    return (
        <div>
            <Navbar/>
            <Amazon/>
            <Shopcart/>
        </div>
    );
};

export default Cartform;
