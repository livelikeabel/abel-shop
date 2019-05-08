import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import PageNation from './PageNation';
import { simpleFetch } from '../../utils';
import Loading from '../../components/Loading';

const Products = () => {
  const [productItems, setProductItems] = useState([]);
  const [pageItems, setPageItems] = useState([]);

  useEffect(() => {
    simpleFetch('productItems').then(res => {
      res.sort((a, b) => b.score - a.score)
      setProductItems(res)
    });
  }, [])

  const handleChangePage = pageItems => {
    setPageItems(pageItems)
  }

  const renderProducts = () => (
    pageItems.map(product => <ProductItem key={product.id} {...product} />)
  )
  
  if (productItems.length === 0) return <Loading />;
  return (
    <>
      {renderProducts()}
      <PageNation
        items={productItems}
        trimNumber={5}
        onChagePage={handleChangePage}
      />
    </>
  )
}

export default Products