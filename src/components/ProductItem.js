import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ title, coverImage, price }) => {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
};

ProductItem.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.string,
  price: PropTypes.number
};

export default ProductItem;