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
      Wishlist 페이지
      <div>
        {wishlist.map(item => (
          <WishItem item={item} coupons={coupons} key={item.id} />)
        )}
      </div>
      <Price />
    </div>
  )
}

export default Wishlist