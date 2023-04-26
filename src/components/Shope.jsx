import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../Utils/FakeDB';
import { productContext } from '../App';

const Shope = () => {
    const productData = useContext(productContext)

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