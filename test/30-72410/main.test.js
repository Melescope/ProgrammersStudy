const chai = require("chai");
const f = require("../../src/30-72410/main");

describe("사이트 규칙에 맞도록 입력된 ID를 수정하는 문제", function () {
  it("입력된 이상한 ID 1 ", function () {
    const actual = f.solution("...!@BaT#*..y.abcdefghijklm");
    chai.expect(actual).to.deep.equal("bat.y.abcdefghi");
  });
  it("입력된 이상한 ID 2 ", function () {
    const actual = f.solution("z-+.^.");
    chai.expect(actual).to.deep.equal("z--");
  });
  it("입력된 이상한 ID 3 ", function () {
    const actual = f.solution("=.=");
    chai.expect(actual).to.deep.equal("aaa");
  });
  it("입력된 이상한 ID 4 ", function () {
    const actual = f.solution("123_.def");
    chai.expect(actual).to.deep.equal("123_.def");
  });
  it("입력된 이상한 ID 5 ", function () {
    const actual = f.solution("abcdefghijklmn.p");
    chai.expect(actual).to.deep.equal("abcdefghijklmn");
  });
});
