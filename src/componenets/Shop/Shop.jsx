// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //    console.log(storedCart);
        // step-1: get id
        for (const id in storedCart) {
            // console.log(id);
            // step-2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                console.log(addedProduct);
                // step-3: get Quentity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step-4: add the addedproduct to the saved cart
                savedCart.push(addedProduct);
            }

        }
        //step-5: set the cart
        setCart(savedCart);
    }, [products])



    const handleAddToCard = (product) => {
        // const newCart = [...cart, product];
        // system-3
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
        product.quantity=1;
        newCart = [...cart, product];
       }
       else{
        exists.quantity = exists.quantity+1;
        const remaining = cart.filter(pd => pd.id !== product.id);
        newCart=[...remaining,exists];
       }

        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;