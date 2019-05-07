import React, { Component } from 'react';
import ProductItem from '../../components/ProductItem';
import PageNation from '../../components/PageNation';
import { simpleFetch } from '../../utils';

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
    if (productItems.length === 0) return <h1>loading</h1>;
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