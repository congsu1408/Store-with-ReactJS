import React from 'react';
import '../styles/shopcart.css';

const Shopcart = ({item, handleClick}) => {
    if (item) {
        const {title, price, img} = item;
        const newhandleClick = () => {
            handleClick(item);
        };
        return (
            <section>
                <div className={"cards"}>
                    <div className="image_box">
                        <img className="imgbottle" src={img} alt=""/>
                    </div>
                    <div className="details">
                        <p>{title}</p>
                        <p>Price : {price}$</p>
                        <button onClick={newhandleClick}>Add to Cart</button>
                    </div>
                </div>
            </section>
        );
    }
};

export default Shopcart;
