import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../Utils/FakeDB';
import { CartContext, productContext } from '../App';
import { toast } from 'react-hot-toast';

const Shope = () => {
    const productData = useContext(productContext)
    const [cart, setCart] = useContext(CartContext)

    const handleAddToCart = product => {
        let newCart = []
        const exists = cart.find(existingProduct => existingProduct.id === product.id)
        if (!exists) {
            product.quantity = 1
            newCart = [...cart, product]
        } else {
            const rest = cart.filter(existingProduct => existingProduct.id !== product.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }
        toast.success('Product added! 🛒')
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='product-container'>
            {
                productData.map(product => <ProductCard
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                />)
            }
        </div>
    );
};

export default Shope;