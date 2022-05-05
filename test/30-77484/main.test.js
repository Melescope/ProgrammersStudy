const chai = require("chai");
const f = require("../../src/30-77484/main");

describe("로또의 최고 순위와 최저 순위", function () {
  //what test?
  it("로또 번호 1 ", function () {
    //it 하나당 case 하나
    //test itself
    const actual = f.solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
    chai.expect(actual).to.deep.equal([3, 5]);
  });
  it("로또 번호 2 ", function () {
    const actual = f.solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
    chai.expect(actual).to.deep.equal([1, 6]);
  });
  it("로또 번호 3 ", function () {
    const actual = f.solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
    chai.expect(actual).to.deep.equal([1, 1]);
  });
});
