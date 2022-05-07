// 2022-05-07 폰번호 암호화 문제
function solution(phone_number) {
  let ans = "";
  for (i = 0; i < phone_number.length - 4; i++) {
    ans += "*";
  }
  for (i = phone_number.length - 4; i < phone_number.length; i++) {
    ans += phone_number[i];
  }
  return ans;
}

module.exports = { solution };
// 풀었는데... 실행이 왜 안되냐
