const bundles = {
  B1: ["P1", "P2"],
};

const selectProducts = (productNames) => {
  return "P1";
};

const bundleChecker = (bundleKey, productList) => {
  const products = bundles[bundleKey];
  return products.every((p) => productList.includes(p));
};

const bundlePicker = (productList) => {
  return Object.keys(bundles).find((bundleKey) => bundleChecker(bundleKey, productList)) || null;
};

const bundleSubstractor = (bundleKey, productList) => {
  const products = bundles[bundleKey];
  return productList.filter((product) => !products.includes(product));
};

module.exports = { selectProducts, bundleChecker, bundlePicker, bundleSubstractor };
