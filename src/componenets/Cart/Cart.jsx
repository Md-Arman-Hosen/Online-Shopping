/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // const cart = props.cart;
    const{cart} = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total*7/100;
    const grandTotal = total+shipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected items: {cart.length}</p>
            <p>Total Price:${total} </p>
            <p>Total Shipping:${shipping} </p>
            <p>Tax:${tax.toFixed(2)} </p>
            <p>Grand Total:${grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;