import React, { Component } from 'react';
import './Shop.css';

import fakeData from '../../fakeData';

import ShopItem from '../ShopItem/ShopItem';

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        let first10 = fakeData.slice(0, 10);
        this.setState({ items: first10 });
    }
    
    render() {
        return (
            <div className="shop-container">
                <div className="items-container">
                    {
                        this.state.items.map(item =>
                            <ShopItem key={item.key} item={item}>{item.name}</ShopItem>
                        )
                    }
                </div>
                <div className="cart-container">
                    <h1>cart-container</h1>
                </div>
            </div>
        );
    }
}

export default Shop;