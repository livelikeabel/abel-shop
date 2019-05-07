import coupons from './../mock-data/coupons';
import productItems from './../mock-data/productItems';

const data = { coupons, productItems };

const simpleFetch = dataName => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data[dataName]);
  }, 3000);
});

export {simpleFetch};