const { default: ProductCard } = require("@/src/components/ProductCard");

function Product(params) {
  console.log(params);
  return <h1>Hello from product</h1>;
}
export default Product;
