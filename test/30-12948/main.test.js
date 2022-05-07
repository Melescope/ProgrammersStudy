const chai = require("chai");
const f = require("../../src/30-12948/main");

describe("핸드폰 번호 암호화 문제", function () {
  it("1. 뒷 4자리만 표시되야 함!!!", function () {
    const actual = f.solution("01033334444");
    chai.expect(actual).to.deep.equal("*******4444");
  });
  it("2. 뒷 4자리만 표시되야 함!!!", function () {
    const actual = f.solution("027778888");
    chai.expect(actual).to.deep.equal("*****8888");
  });
});
