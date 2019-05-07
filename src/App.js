import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/main';
import Products from './pages/products';
import Wishlist from './pages/wishlist';

import './App.scss';

export const ShopContext = createContext();

const App = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 'B9vUv0E0ibc0X55kVVLr',
      title: '포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스',
      coverImage: 'https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729',
      price: 560000,
      score: 200,
    },
    {
      id: '81x83ysiEHsHCBoeVh2O',
      title: '글씨가 주는 소소한 행복, Lettering Together!',
      coverImage: 'https://cdn.class101.net/images/ec0f0c15-aeec-43a3-a0c9-b649b0999f0a',
      price: 320000,
      score: 300,
  
    }
  ]);

  return (
    <>
      <ShopContext.Provider value={{ wishlist, setWishlist }}>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/products" component={Products} />
            <Route path="/wishlist" component={Wishlist} />
          </div>
        </Router>
      </ShopContext.Provider>
    </>
  );
};

export default App;
