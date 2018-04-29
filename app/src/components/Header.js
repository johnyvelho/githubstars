import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './../assets/images/logo.svg';

class Header extends Component {
    render() {
        return (
            <div id="header" className="flex flex-wrap items-center">
                <h1 id="logo" className="w-20">
                    <span className="sr-only">GithubStars</span>
                    <Link to="/"><img src={logo} alt=""/></Link>
                </h1>
                <div id="search" className="w-70">
                    <input type="text" className="w-100" placeholder="github username..."/>
                    <button className="button-search">Search</button>
                </div>
                <div id="user" className="w-10 tr">
                    <img src="http://via.placeholder.com/64x64" className="br-100" alt=""/>
                </div>
            </div>
        );
    }
}

export default Header;
