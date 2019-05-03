import React from 'react';
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div className="buttons">
                <NavLink exact to="/">Movies</NavLink>
                <NavLink exact to="/tvSeries">Tv Series</NavLink></div>
            <input type="search" path="/" placeholder="search movie or tv serie" />
        </div>
    );
}

export default Header;