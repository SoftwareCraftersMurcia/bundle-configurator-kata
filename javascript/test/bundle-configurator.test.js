const {selectProducts} = require('../src/bundle-configurator');

describe("Bundle Configurator", function () {
    it("select product P1", function () {
        const result = selectProducts("P1");

        expect(result).toBe("P1");
    });
});
