import React, { Component } from 'react';
import './ShopItem.css';

import Rating from 'react-rating';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class ShopItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className="item">
                <div>
                    <img src={item.img} alt=""/>
                </div>
                <div>
                    <h4 className="item-header">{item.name}</h4>
                    <p><small>by: {item.seller}</small></p>
                    <div className="item-description">
                        <div>
                            <p>${item.price}</p>
                            <p><small>only {item.stock} left in stock! - order soon</small></p>
                            <button><i onClick={() => this.props.cartCallback(item)} className="fa fa-shopping-cart"></i> Add to cart</button>
                        </div>
                        <div>
                            <Rating className="rating" empty="fa fa-star-o" full="fa fa-star" placeholder="fa fa-star" placeholderRate={item.star} readonly />
                            <h4>Features:</h4>
                            <ul>
                                {
                                    item.features.map(feature =>
                                        <li key={feature.description}>
                                            {feature.description} 
                                            <strong>{feature.value}</strong>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopItem;