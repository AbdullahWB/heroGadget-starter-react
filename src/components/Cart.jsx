import React from 'react';
import { getStoredCart } from '../Utils/FakeDB';

const Cart = () => {

    const cart = getStoredCart()
    console.log(cart);

    return (
        <div>
            
        </div>
    );
};

export default Cart;