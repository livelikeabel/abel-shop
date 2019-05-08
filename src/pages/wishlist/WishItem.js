import React, { useContext } from 'react';
import { ShopContext } from '../../App';
import './WishItem.scss';

const WishItem = ({ item, coupons }) => {
  const { wishlist, setWishlist } = useContext(ShopContext);
  const {
    product: { id, title, coverImage, price },
    selected, quantity
  } = item;

  const toggleSelected = id => {
    const toggled = wishlist.map((item) => {
      const { product, selected } = item;
      return product.id === id ?
        { ...item, selected: !selected } :
        item;
    })
    setWishlist(toggled)
  }

  const handleChangeCount = (id, { target: { value } }) => {
    const changed = wishlist.map(item => {
      const { product } = item;
      return product.id === id ?
        { ...item, quantity: value } :
        item;
    })
    setWishlist(changed)
  }

  return (
    <div className="WishItem">
      <input
        type="checkbox"
        checked={selected}
        onChange={toggleSelected.bind(this, id)}
      />
      <img src={coverImage} alt={title} />
      <div className="WishItem__mid">
        <p className="WishItem__mid__title">{title}</p>
        <p className="WishItem__mid__price">{price}<span>원</span></p>
      </div>
      <input
        className="WishItem__count"
        type="number"
        value={quantity}
        onChange={handleChangeCount.bind(this, id)}
      />
      <select
        className="WishItem__select"
        onChange={() => { console.log("select!") }}
      >
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