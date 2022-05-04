// 2022-05-04 맨 끝 문제
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  let line = "";
  for (i = 0; i < a; i++) {
    line += "*";
  }
  for (i = 0; i < b; i++) {
    console.log(line);
  }
});

// 쉬움 끝
