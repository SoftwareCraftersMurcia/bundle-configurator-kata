const bundles = {
  B1: ["P1", "P2"],
};

const selectProducts = (productNames) => {
  return "P1";
};

const bundleChecker = (bundle, productList) => {
  const products = bundles[bundle];
  return products.every((p) => productList.includes(p));
};

module.exports = { selectProducts, bundleChecker };
