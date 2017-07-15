import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const cart = this.props.cart
        return (
            <div>
                <h3>Order Summary</h3>
                <p>Items Ordered: {cart.length}</p>
                <button>Review My Order</button>
            </div>
        );
    }
}

export default Cart;