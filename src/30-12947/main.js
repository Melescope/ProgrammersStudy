// 2022-05-08 하샤드 수
function solution(x) {
  let s = String(x);
  let sumh = 0;
  for (i = 0; i <= s.length - 1; i++) {
    sumh += parseInt(s[i]);
  }

  if (x % sumh === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(solution(11));
module.exports = { solution };
// for문 range를 신경 씁시다.
