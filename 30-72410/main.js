function solution(new_id) {
  id = new_id;

  id = id.toLowerCase();

  id = id.replace(/[^a-z0-9-_.]/g, "");

  while (id.includes("..")) {
    id = id.replace(/\.{2,}/, ".");
  }

  if (id[0] === ".") {
    id = id.replace(id[0], "");
    //console.log("첫 . 삭제", id);
  }

  if (id[id.length - 1] === ".") {
    id = id.slice(0, id.length - 2);
    console.log("마지막 . 없애기", id);
  }

  if (id === "") {
    id = "a";
  }

  if (id.length >= 16) {
    console.log(
      "15글자로 줄이기 전",
      id[0],
      id[1],
      id[2],
      id[3],
      id[4],
      id[5],
      id[6],
      id[7],
      id[8],
      id[9],
      id[10],
      id[11],
      id[12],
      id[13],
      id[14],
      id[15]
    );
    id = id.slice(0, 14);
    // 위에 이거 15글자만 남기는거 아님?? 왜 14글자만 남길까??
    console.log(
      "15글자로 줄이기",
      id[0],
      id[1],
      id[2],
      id[3],
      id[4],
      id[5],
      id[6],
      id[7],
      id[8],
      id[9],
      id[10],
      id[11],
      id[12],
      id[13],
      id[14],
      id[15]
    );
  }

  if (id[id.length - 1] === ".") {
    id = id.slice(0, id.length - 2);
    console.log("마지막 . 없애기2", id);
  }

  if (id.length === 2) {
    id += id[1];
  }

  if (id.length === 1) {
    id += id[0];
    id += id[0];
  }

  return id;
}

console.log(
  "The solution answer is : ",
  solution("...!@BaT#*..y.abcdefghijklm")
);
console.log("The correct answer is : bat.y.abcdefghi");
console.log("The solution answer is : ", solution("abcdefghijklmn.p"));
console.log("The correct answer is : abcdefghijklmn");
