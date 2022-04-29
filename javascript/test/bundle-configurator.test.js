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
    expect(actual).toEqual(expected);
  });
  it("should be bundle [B1] bundle for [P1,P2]", () => {
    const actual = bundleChecker(["P1","P2"]);
    const expected = ["B1"];
    expect(actual).toEqual(expected);
  });
});
