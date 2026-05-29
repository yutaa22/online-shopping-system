import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';

import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/Orders';

import './styles/style.css';

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path='/'
          element={<ProductList />}
        />

        <Route
          path='/product/:id'
          element={
            <ProductDetails addToCart={addToCart} />
          }
        />

        <Route
          path='/cart'
          element={<Cart cart={cart} />}
        />

        <Route
          path='/login'
          element={<Login />}
        />

        <Route
          path='/register'
          element={<Register />}
        />

        <Route
          path='/orders'
          element={<Orders />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;