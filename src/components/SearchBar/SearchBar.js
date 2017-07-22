import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div id="search-bar-container">
                <input type="text" placeholder="type here to search"/>
                <i className="fa fa-shopping-cart fa-lg"></i>
                <span id="cart-number">{this.props.cartSize}</span>
            </div>
        );
    }
}

export default SearchBar;