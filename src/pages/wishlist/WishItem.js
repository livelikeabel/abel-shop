import React from 'react';
import './WishItem.scss';

const WishItem = ({ item, coupons }) => {
  const { id, title, coverImage, price } = item;
  return (
    <div className="WishItem">
      <img src={coverImage} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <input type="checkbox" />
      <input type="number" />
      <select>
        <option>쿠폰을 선택 하세요</option>
        {coupons.map(c => (
          <option
            value={c.discountRate || c.discountAmount}
            key={c.title}
          >
            {c.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default WishItem;