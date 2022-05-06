// 2022-05-04 x만큼 n간격
function solution(x, n) {
  let thelist = [];
  for (i = 1; i <= n; i++) {
    thelist.push(i * x);
  }
  return thelist;
}
module.exports = { solution };
// 해결 완료
