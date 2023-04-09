import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../Utils/FakeDB';

const Shope = () => {
    const productData = useLoaderData()
    // console.log(productData)
    const handleAddToCart = id => {
        addToDb(id)
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