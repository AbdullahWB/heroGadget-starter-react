import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Model';

export const productContext = createContext([])
export const CartContext = createContext([])

const App = () => {
  let [isOpen, setIsOpen] = useState(false)
  const { cartArr, products } = useLoaderData()
  const [cart, setCart] = useState(cartArr)

  const cartAlert = sessionStorage.getItem("alert")
  if (cart.length > 0 && cartAlert !== 'true') {
    setIsOpen(true)
    sessionStorage.setItem('alert', true)
  }

  return (
    <productContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <div className='min-h-[calc(100vh-137px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} ></Modal>
      </CartContext.Provider>
    </productContext.Provider>
  );
};

export default App;
