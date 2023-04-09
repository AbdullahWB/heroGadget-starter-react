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


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
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
                loader: () => fetch('products.json')
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
