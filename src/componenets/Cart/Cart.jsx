/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // const cart = props.cart;
    const{cart} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart){
        //system-1
        // if(product.quantity === 0){
        //     product.quantity=1;
        // }
        // system-2
        // product.quantity = product.quantity || 1;
        // system-3: shop.jsx e
        total = total + product.price*product.quantity;
        shipping = shipping + product.shipping*product.quantity;
        quantity= quantity+product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total+shipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected items: {quantity}</p>
            <p>Total Price:${total} </p>
            <p>Total Shipping:${shipping} </p>
            <p>Tax:${tax.toFixed(2)} </p>
            <p>Grand Total:${grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;