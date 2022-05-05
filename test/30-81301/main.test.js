const chai = require("chai");
const f = require("../../src/30-81301/main");

describe("숫자 문자열과 영단어", function () {
  //what test?
  it("암호문 1 ", function () {
    //it 하나당 case 하나
    //test itself
    const actual = f.solution("one4seveneight");
    chai.expect(actual).to.deep.equal(1478);
  });
  it("암호문 2 ", function () {
    //it 하나당 case 하나
    //test itself
    const actual = f.solution("23four5six7");
    chai.expect(actual).to.deep.equal(234567);
  });
  it("암호문 3 ", function () {
    //it 하나당 case 하나
    //test itself
    const actual = f.solution("2three45sixseven");
    chai.expect(actual).to.deep.equal(234567);
  });
  it("암호문 4 ", function () {
    //it 하나당 case 하나
    //test itself
    const actual = f.solution("123");
    chai.expect(actual).to.deep.equal(123);
  });
});
