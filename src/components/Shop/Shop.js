import React, { Component } from 'react';
import './Shop.css';

import fakeData from '../../fakeData';

import ShopItem from '../ShopItem/ShopItem';
import Cart from '../Cart/Cart';

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            cart: []
        }
    }

    componentDidMount() {
        let first10 = fakeData.slice(0, 10);
        this.setState({ items: first10 });
    }

    addToCart(key) {
        let selectedItem = this.state.items.find(item => item.key === key);
        let newCart = [...this.state.cart];
        newCart.push(selectedItem);
        this.setState({
            cart: newCart
        });
    }
    
    render() {
        return (
            <div className="shop-container">
                <div className="items-container">
                    {
                        this.state.items.map(item =>
                            <ShopItem key={item.key} item={item}>{item.name} cartCallback={this.addToCart}</ShopItem>
                        )
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={this.state.cart}/>
                </div>
            </div>
        );
    }
}

export default Shop;