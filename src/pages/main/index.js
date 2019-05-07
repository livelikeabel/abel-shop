import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      메인페이지
      <Link to="/products">클래스 보러가기</Link>
      <Link to="/wishlist">장바구니 보러가기</Link>
    </div>
  )
}

export default Main;