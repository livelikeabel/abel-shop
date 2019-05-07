import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { simpleFetch } from '../../utils';

class Products extends Component {
  componentDidMount() {
    simpleFetch('productItems').then(res => console.log(res));
    simpleFetch('coupons').then(res => console.log(res));
  }

  render() {
    return <div>프로덕트 페이지</div>
  }
}

export default Products