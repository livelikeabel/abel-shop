import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { ShopContext } from '../App.js';
import './ProductItem.scss';

const ProductItem = item => {
  const { id, title, coverImage, price } = item;
  const { wishlist, setWishlist } = useContext(ShopContext);

  const toggleItem = id => {
    const callback = item => item.id !== id;
    wishlist.every(callback) ?
      wishlist.length < 3 ?
        setWishlist([...wishlist, item]) :
        alert('장바구니는 3개까지만 담을 수 있어요 :)') :
      setWishlist(wishlist.filter(callback))
  };

  return (
    <div className="ProductItem">
      <img src={coverImage} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <Button onClick={toggleItem.bind(this, id)}>
        {wishlist.every(v => v.id !== id) ? '담기' : '빼기'}
      </Button>
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    coverImage: PropTypes.string,
    price: PropTypes.number
  }),
};

export default ProductItem;