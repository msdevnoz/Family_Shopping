import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Footer } from './Components/Footer/Footer';
import { Shop } from './Pages/Shop';
import mensbanner from './Components/Assets/mens-banner.png';
import womensbanner from './Components/Assets/womens-banner.png';
import childsbanner from './Components/Assets/childs-banner.png';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={mensbanner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={womensbanner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={childsbanner} category="kids" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
