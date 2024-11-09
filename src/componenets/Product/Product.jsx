/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // eslint-disable-next-line react/prop-types
    const { name, price, seller, ratings, img } = props.product;
    const handleAddToCard= props.handleAddToCard;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
           <button onClick={() => handleAddToCard (props.product)} 
           className='btn-cart'>
            Add to Cart
            <FontAwesomeIcon icon={faShoppingCart}/>
            </button>

        </div>
    );
};

export default Product;