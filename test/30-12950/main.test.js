const chai = require("chai");
const f = require("../../src/30-12950/main");

describe("두 행렬의 합", function () {
  it("행렬의 합 1 ", function () {
    const actual = f.solution(
      [
        [1, 2],
        [2, 3],
      ],
      [
        [3, 4],
        [5, 6],
      ]
    );
    chai.expect(actual).to.deep.equal([
      [4, 6],
      [7, 9],
    ]);
  });
  it("행렬의 합 2 ", function () {
    const actual = f.solution([[1], [2]], [[3], [4]]);
    chai.expect(actual).to.deep.equal([[4], [6]]);
  });
});
