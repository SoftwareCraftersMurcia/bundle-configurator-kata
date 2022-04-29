const { selectProducts, bundleChecker } = require("../src/bundle-configurator");

describe("Bundle Configurator", function () {
  it("select product P1", function () {
    const result = selectProducts("P1");
    expect(result).toBe("P1");
  });
});

describe("Bundle Checker", () => {
  it("There is no bundle for [P1]", () => {
    const actual = bundleChecker(["P1"]);
    const expected = ["P1"];
  });
});
