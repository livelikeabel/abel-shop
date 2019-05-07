import React, { Component } from 'react';
import ProductItem from '../../components/ProductItem';
import PageNation from '../../components/PageNation';
import { simpleFetch } from '../../utils';

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

  renderProductItems = () => (
    this.state.pageItems.map(item => <ProductItem key={item.id} {...item} />)
  )

  render() {
    const { productItems } = this.state;
    if (productItems.length === 0) return <h1>loading</h1>;
    return (
      <div>
        {this.renderProductItems()}
        <PageNation
          items={productItems}
          trimNumber={5}
          onChagePage={this.handleChangePage}
        />
      </div>
    )
  }
}

export default Products