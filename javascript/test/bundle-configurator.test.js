const { selectProducts, bundleChecker, bundlePicker } = require("../src/bundle-configurator");

describe("Bundle Configurator", function () {
  it("select product P1", function () {
    const result = selectProducts("P1");
    expect(result).toBe("P1");
  });
});

describe("Bundle Checker", () => {
  it("B1 is not in [P1]", () => {
    const actual = bundleChecker("B1", ["P1"]);
    expect(actual).toBe(false);
  });

  it("B1 is in [P1,P2]", () => {
    const actual = bundleChecker("B1", ["P1", "P2"]);
    expect(actual).toBe(true);
  });
});

describe("Bundle picker", () => {
  it('should not find any bundle for [P1]', () => {
    const actual = bundlePicker(["P1"]);
    expect(actual).toBe(null);
  });
  it('should return B1 for [P1,P2]', () => {
    const actual = bundlePicker(["P1","P2"]);
    expect(actual).toEqual("B1");
  });
});
