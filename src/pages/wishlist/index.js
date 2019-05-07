import React, { useState, useEffect, useContext } from 'react';
import Price from './Price';
import WishItem from './WishItem';
import { simpleFetch } from '../../utils';
import { ShopContext } from '../../App';
import './index.scss';

const Wishlist = () => {
  const { wishlist } = useContext(ShopContext);
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    simpleFetch('coupons').then(coupons => {
      setCoupons(coupons);
    });
  }, []);

  return (
    <div className="Wishlist">
      <div className="Wishlist__wishItem-wrapper">
        <h1>장바구니</h1>
        {wishlist.map(item => (
          <WishItem item={item} coupons={coupons} key={item.id} />)
        )}
      </div>
      <Price />
    </div>
  )
}

export default Wishlist