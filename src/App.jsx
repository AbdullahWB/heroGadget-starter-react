import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export const productContext = createContext([])
export const CartContext = createContext([])

const App = () => {
  const { cartArr, products } = useLoaderData()
  const [cart, setCart] = useState(cartArr)
  return (
    <productContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <div className='min-h-[calc(100vh-137px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </CartContext.Provider>
    </productContext.Provider>
  );
};

export default App;
