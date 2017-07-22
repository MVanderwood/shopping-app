import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const cart = this.props.cart;
        return (
            <div>
                <div className="cart-header">
                    <h3>Order Summary</h3>
                    <p>Items Ordered: {cart.length}</p>
                </div>
                <table className="cart-summary">
                    <tbody>
                        <tr className="summary-item">
                            <td>Items:</td>
                            <td>${5.00}</td>
                        </tr>
                        <tr className="summary-item">
                            <td>Shipping & handling:</td>
                            <td>${5.00}</td>
                        </tr>
                        <tr className="summary-item">
                            <td>Total before tax:</td>
                            <td>${5.00}</td>
                        </tr>
                        <tr className="summary-item">
                            <td>Estimated tax:</td>
                            <td>${5.00}</td>
                        </tr>
                        <tr className="summary-total">
                            <td>Order Total:</td>
                            <td>${5.00}</td>
                        </tr>
                    </tbody>
                </table>
                <button>Review My Order</button>
            </div>
        );
    }
}

export default Cart;