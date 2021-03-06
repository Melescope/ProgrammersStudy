// 2022 05 01 시작 - 인형뽑기

function samepang(L) {
  // 마지막이 같은 원소가 2개면 지우는 함수. L은 쌓인 인형 리스트
  for (i in L) {
    if (L.length > 1 && L[L.length - 1] === L[L.length - 2]) {
      L = L.splice(L.length - 2, 2);
    }
  }
  return L;
}
function solution(board, moves) {
  panglist = [];
  count = 0;
  for (i of moves) {
    //각 move 명령 == i
    for (h of board) {
      // h는 높이, 가장 윗줄부터 0 1 2
      if (h[i - 1] != 0) {
        panglist.push(h[i - 1]);
        h[i - 1] = 0;
        if (panglist[panglist.length - 1] === panglist[panglist.length - 2]) {
          samepang(panglist);
          count += 2;
        }
        break;
      }
    }
  }
  return count;
}
module.exports = { solution, samepang };
//풀었당. push는 리스트 오른쪽 끝에 추가되는거다. 그리고 break 위치를 신경 쓰자
