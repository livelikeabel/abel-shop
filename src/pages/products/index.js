import React, { Component } from 'react';
import ProductItem from './ProductItem';
import PageNation from './PageNation';
import { simpleFetch } from '../../utils';
import Loading from '../../components/Loading';

// react16의 함수형 컴포넌트로 바꾸기
class Products extends Component {
  state = { productItems: [], pageItems: [], currentPage: 1 };

  componentDidMount() {
    simpleFetch('productItems').then(productItems => {
      productItems.sort((a, b) => b.score - a.score)
      this.setState(() => ({ productItems }));
    });
  }

  handleChangePage = pageItems => {
    this.setState(() => ({ pageItems }))
  }

  renderProducts = () => (
    this.state.pageItems.map(product => <ProductItem key={product.id} {...product} />)
  )

  render() {
    const { productItems } = this.state;
    if (productItems.length === 0) return <Loading/>;
    return (
      <>
        {this.renderProducts()}
        <PageNation
          items={productItems}
          trimNumber={5}
          onChagePage={this.handleChangePage}
        />
      </>
    )
  }
}

export default Products