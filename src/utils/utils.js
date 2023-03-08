export const calcSelectedPrice = (products, price = "all", priceLists) => {
  let minNum = priceLists[price][0];
  let maxNum = priceLists[price][1];

  console.log(
    products.filter(
      (product) => product.price >= minNum && product.price <= maxNum
    )
  );

  return products.filter(
    (product) => product.price >= minNum && product.price <= maxNum
  );
};
