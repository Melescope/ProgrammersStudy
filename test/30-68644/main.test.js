const chai = require("chai");
const f = require("../../src/30-68644/main");

describe("배열 중 2개 원소 합을 배열로 반환하는 문제", function () {
  //what test?
  it("배열 중 2개 합 list 1 ", function () {
    //it 하나당 case 하나
    //test itself
    const actual = f.solution([2, 1, 3, 4, 1]);
    chai.expect(actual).to.deep.equal([2, 3, 4, 5, 6, 7]);
  });
  it("배열 중 2개 합 list 2 ", function () {
    const actual = f.solution([5, 0, 2, 7]);
    chai.expect(actual).to.deep.equal([2, 5, 7, 9, 12]);
  });
});
