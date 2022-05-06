// 로또의 최대 등수랑 최소 등수를 리턴하는 함수 만들기
// 각 원소에 대해 list에 있는지 판별하는 함수가 필요 (파이썬의  in 같은)
// list.includes(원소,검색 시작할 인덱스) == true or false

function solution(lottos, win_nums) {
  zero = 0; //0의 갯수
  correct = 0; //이미 맞은 개수
  fail = 0; //이미 틀린 개수
  for (i of lottos) {
    if (i === 0) {
      zero += 1;
    } else if (win_nums.includes(i)) {
      correct += 1;
    } else if (!win_nums.includes(i)) {
      fail += 1;
    }
  }
  maxl = correct + zero;
  minl = correct;
  maxrank = 7 - maxl;
  minrank = 7 - minl;
  if (minrank === 7) {
    minrank = 6;
  }
  if (maxrank === 7) {
    maxrank = 6;
  }
  var answer = [maxrank, minrank];

  return answer;
}
module.exports = { solution };
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));

// 맞았당!
