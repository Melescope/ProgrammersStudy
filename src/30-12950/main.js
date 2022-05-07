// 2022-05-07 행렬 합 구현
function solution(arr1, arr2) {
  let answer = [];
  for (i = 0; i <= arr1.length - 1; i++) {
    answer.push([]);
    for (j = 0; j <= arr1[i].length - 1; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}
module.exports = { solution };
console.log(solution([[1], [2]], [[3], [4]]));
//왜 결과가 arr1 이런 식으로 되는거냐
