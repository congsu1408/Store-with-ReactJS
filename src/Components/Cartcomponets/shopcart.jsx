import React from 'react';
import '../styles/shopcart.css';

const Shopcart = ({list}) => {
    if (list) {
        const {title, price, img} = list;
        return (
            <section>
                <div className={"cards"}>
                    <div className="image_box">
                        <img className="imgbottle" src={img} alt=""/>
                    </div>
                    <div className="details">
                        <p>{title}</p>
                        <p>{price}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </section>
        );
    }
};

export default Shopcart;
