import React from 'react';
import './Price.scss';

const Price = () => {
  return (
    <div className="Price">
      <p className="Price__title">총 선택 상품</p>
      <div className="Price__container">
        <div className="Price__row">
          <p>총 상품 가격</p>
          <p>10,000 <span>원</span></p>
        </div>
        <div className="Price__row">
          <p>할인</p>
          <p className="Price__row__discount">10,000 <span>원</span></p>
        </div>
        <div className="Price__last-row">
          <p>총 결제금액</p>
          <p className="Price__last-row__price">10,000 <span>원</span></p>
        </div>
      </div>
    </div>
  )
}

export default Price;