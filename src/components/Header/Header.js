import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/logo.png'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo}></img>
                <ul>
                    <li>
                        <a href="/shop">Shop</a>
                    </li>
                    <li>
                        <a href="/review">Order Review</a>
                    </li>
                    <li>
                        <a href="/manage">Manage Inventory</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;