const chai = require("chai");
const f = require("../../src/30-12969/main");

describe("직사각형 별 찍기 문제", function () {
  it("return 없음!", function () {
    const actual = f.solve(5, 3);
    chai.expect(actual).to.equal("");
  });
});
