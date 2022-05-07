const chai = require("chai");
const f = require("../../src/30-12944/main");

describe("평균 계산 함수", function () {
  it("평균 1 ", function () {
    const actual = f.solution([1, 2, 3, 4]);
    chai.expect(actual).to.equal(2.5);
  });
  it("평균 2 ", function () {
    const actual = f.solution([5, 5]);
    chai.expect(actual).to.equal(5);
  });
});
