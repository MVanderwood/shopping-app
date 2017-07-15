import React, { Component } from 'react';

import Cart from '../Cart/Cart';

class OrderReview extends Component {
    render() {
        return (
            <div>
                <div className="shop-container">
                    <div className="items-container"></div>
                    <div className="cart-container">
                        <Cart/>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderReview;