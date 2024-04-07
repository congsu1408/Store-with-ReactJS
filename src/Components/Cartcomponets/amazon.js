import React, {useState} from 'react';
import list from "../data";
import Shopcart from "./shopcart";

const Amazon = (handleClick) => {

    return (
        <div>
            {list.map((list) => (
                <Shopcart item={list} handleClick={handleClick} key={list.id}/>
            ))}
        </div>
    );
};

export default Amazon;
