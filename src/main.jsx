import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Shope from './components/Shope'
import Cart from './components/Cart'
import { productAndCartData } from './Loaders/getCart&ProductData'
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        loader: () => productAndCartData(),
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/shop',
                element: <Shope />,
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Toaster></Toaster>
        <RouterProvider router={router} />
    </>
)
