// 개발 출시일 2022 05 11
function solution(progresses, speeds) {
  let remain = [];
  let ans = [];
  for (i = 0; i < speeds.length; i++) {
    remain[i] = (100 - progresses[i]) / speeds[i];
  }
  for (i = 0; i < speeds.length; i++) {
    if (remain[i] < remain[i + 1]) {
      ans.push(1);
    } else {
      stack = 0;
      for (j = i; j < remain.length; j++) {
        if (remain[i] >= remain[i + 1]) {
          stack += 1;
        }
      }
      ans.push(stack);
      i = j;
    }
  }
  return ans;
}

solution([93, 30, 55], [1, 30, 5]);
