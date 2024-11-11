export function sortByPriceAsc(product1, product2) {
  const priceA =
    product1.sale_price > 0 ? product1.sale_price : product1.product_price;
  const priceB =
    product2.sale_price > 0 ? product2.sale_price : product2.product_price;
  return priceA - priceB;
}

export function sortByPriceDesc(product1, product2) {
  const priceA =
    product1.sale_price > 0 ? product1.sale_price : product1.product_price;
  const priceB =
    product2.sale_price > 0 ? product2.sale_price : product2.product_price;
  return priceB - priceA;
}

export function sortByNone(products) {
  return products;
}
