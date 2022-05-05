const chai = require("chai");
const f = require("../../src/30-64061/main");

describe("인형뽑기 문제", function () {
  //what test?
  it("최소 로봇 arm 이동 수 1 ", function () {
    //it 하나당 case 하나
    //test itself
    const actual = f.solution(
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
      ],
      [1, 5, 3, 5, 1, 2, 1, 4]
    );
    chai.expect(actual).to.equal(4);
  });
});
