// 2022-05-01 , 정수 배열이 주어지면 2개 뽑아서 더한 결과들을 오름차순으로 정리해서 list 리턴

function solution(numbers) {
  answerList = [];
  for (i = 0; i < numbers.length - 1; i += 1) {
    for (j = i + 1; j <= numbers.length - 1; j += 1) {
      //console.log(i, j);
      answerList.push(numbers[i] + numbers[j]);
    }
  } // answerList의 중복값을 싹 정리하자
  ans = new Set(answerList); // set으로 중복값 제거
  answer = Array.from(ans); // 다시 배열로
  answer = answer.sort((a, b) => a - b); //오름차순 정렬
  return answer;
}
module.exports = { solution };

// 엉엉 JS for문은 파이썬이랑 너무 달라
// 구글링 결과, for of 쓰지 말고 i랑 j를 인덱스로 삼아서 하면 된당. 2022 05 03
// 헐 list.sort를 하면 11이 2보다 더 앞에 온다. 약간 사전 정렬하듯 하는 듯?
// 이걸 사전처럼 하지 말고 숫자 크기대로 하는 방법 없나??
// answer = answer.sort((a, b) => a - b); 이렇게 하면 오름차순이 되는데 그 이유를 모르겠네...
// 아무튼 구글링으로 풀었다. 2022 05 03
// test 구현 2022 05 05
