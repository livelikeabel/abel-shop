import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/main';
import Products from './pages/products';
import Wishlist from './pages/wishlist';

import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/products" component={Products} />
        <Route path="/topics" component={Wishlist} />
      </div>
    </Router>
  );
}

export default App;
