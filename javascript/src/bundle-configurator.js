const bundles = {
  B1: ["P1", "P2"]
};

const selectProducts = (productNames) => {
  return "P1";
};

const bundleChecker = (productList) => {
  const bundle = Object.keys(bundles).find((key) => bundles[key].every(p => productList.includes(p)))
  return bundle?[bundle]:productList;
};

module.exports = { selectProducts, bundleChecker };
