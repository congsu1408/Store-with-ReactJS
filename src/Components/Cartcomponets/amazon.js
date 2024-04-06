import React from 'react';
import list from "../data";
import Shopcart from "./shopcart";

const Amazon = () => {
    return (
        <div>
            {list.map((list) => (
                <Shopcart key={list.id} list={list}/>
            ))}
        </div>
    );
};

export default Amazon;
