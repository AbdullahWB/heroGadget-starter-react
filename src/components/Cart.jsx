import React from 'react';
import { getStoredCart } from '../Utils/FakeDB';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const { cartArr, product } = useLoaderData()
    console.log(cartArr, product);
    return (
        <div>
            cart
        </div>
    );
};

export default Cart;