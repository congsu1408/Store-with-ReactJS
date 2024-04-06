import React from 'react';
import './Home.css';
import Cartform from "./Cartform";

const Home = () => {
    return (
        <div>
            <div className="home_header">
                <div className="data">
                    <div className="header_container">
                        <h1>Hair</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <button className={"Shampoobtn"}>Shop Shampoo</button>
                    </div>
                </div>
            </div>
            <Cartform/>
        </div>
    );
};

export default Home;
