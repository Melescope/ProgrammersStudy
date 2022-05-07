// 2022-05-08 평균 리턴
function solution(arr) {
  sum = 0;
  n = arr.length;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / n;
}
module.exports = { solution };
// for문 range를 신경 씁시다.
