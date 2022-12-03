const { default: webpackDep } = require("../cjs/index.cjs");

describe("webpackDep", () => {
  it("should work", async () => {
    const result = await webpackDep();

    expect(result.size).toBeGreaterThan(0);
  });
});
