import React, { Component } from 'react';
import ProductItem from './../../components/ProductItem';
import { simpleFetch } from '../../utils';

class Products extends Component {
  state = { productItems: [] }
  componentDidMount() {
    simpleFetch('productItems').then(res => {
      // 정렬하기 util로
      this.setState(() => ({ productItems: res }));
    });
  }

  renderProductItems = () => (
    this.state.productItems.map(item => <ProductItem key={item.id} {...item}/>)
  )

  render() {
    return (
      <div>
        {this.state.productItems.length === 0 ? <h1>loading</h1> : this.renderProductItems()}
      </div>
    )
  }
}

export default Products