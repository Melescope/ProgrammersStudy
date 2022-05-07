const chai = require("chai");
const f = require("../../src/30-12947/main");

describe("하샤드 수 판별 함수", function () {
  it("판별 결과 1 ", function () {
    const actual = f.solution(10);
    chai.expect(actual).to.equal(true);
  });
  it("판별 결과 2 ", function () {
    const actual = f.solution(12);
    chai.expect(actual).to.equal(true);
  });
  it("판별 결과 3 ", function () {
    const actual = f.solution(11);
    chai.expect(actual).to.equal(false);
  });
  it("판별 결과 4 ", function () {
    const actual = f.solution(13);
    chai.expect(actual).to.equal(false);
  });
});
