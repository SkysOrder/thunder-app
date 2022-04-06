import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
    const id = Product._id;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Shopcite
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
        <Routes>
          <Route path="/product/:id" element={<ProductScreen/>}></Route>
          <Route path="/" element={<HomeScreen/>} exact></Route>
          </Routes>
        </main>
        <footer className="row center">All right reserved why dragon</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;