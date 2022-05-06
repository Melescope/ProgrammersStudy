const chai = require("chai");
const f = require("../../src/30-12954/main");

describe("x만큼 간격이 있는 n개의 숫자", function () {
  it("x , n의 조합 1 ", function () {
    const actual = f.solution(2, 5);
    chai.expect(actual).to.deep.equal([2, 4, 6, 8, 10]);
  });
  it("x , n의 조합 2 ", function () {
    const actual = f.solution(4, 3);
    chai.expect(actual).to.deep.equal([4, 8, 12]);
  });
  it("x , n의 조합 3 ", function () {
    const actual = f.solution(-4, 2);
    chai.expect(actual).to.deep.equal([-4, -8]);
  });
});
