import React from 'react';
import {Link} from 'react-router-dom';
import Imgrefresher from './images/logo.avif';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    return (
        <div>
            <div className={"navbar_div"}>
                <div>
                    <input type="text" placeholder={'Search Here'}/>
                    <SearchIcon className={"search_icon_input"}/>
                    <CloseIcon className={"close_icon"}/>
                </div>
                <div>
                    <div className={"navbar_main"}>
                        <div>
                            <div>
                                <SearchIcon className={"search_icon"}/>
                            </div>
                            {/*Menu Icon*/}
                        </div>
                        <div>
                            <img src={Imgrefresher} className={"heading_logo"} alt=""/>
                        </div>
                        <div className="bad_search">
                            {/*search icon*/}
                            {/*local icon*/}
                        </div>
                    </div>
                    <div className="Nav_links">
                        <Link to={'/'} className="link">Home</Link>
                        <Link to={'/signup'} className={"link"}>Signup</Link>
                        <Link to={'/contact'} className={"link"}>Contact</Link>
                        <Link to={'/privacy'} className={"link"}>Privacy</Link>
                        <Link to={'/loginform'} className={"link"}>Loginform</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
