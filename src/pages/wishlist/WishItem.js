import React from 'react';
import './WishItem.scss';

const WishItem = ({ item, coupons }) => {
  const { id, title, coverImage, price } = item;
  return (
    <div className="WishItem">
      <input type="checkbox" />
      <img src={coverImage} alt={title} />
      <div className="WishItem__mid">
        <p className="WishItem__mid__title">{title}</p>
        <p className="WishItem__mid__price">{price}<span>원</span></p>
      </div>
      <input className="WishItem__count" type="number" />
      <select className="WishItem__select">
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