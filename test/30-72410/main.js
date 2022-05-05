function solution(new_id) {
  id = new_id;

  id = id.toLowerCase();

  id = id.replace(/[^a-z0-9-_.]/g, "");

  while (id.includes("..")) {
    id = id.replace(/\.{2,}/, ".");
  }

  if (id[0] === ".") {
    id = id.replace(id[0], "");
  }

  if (id[id.length - 1] === ".") {
    id = id.slice(0, id.length - 1);
    console.log("마지막 . 없애기", id);
  }

  if (id === "") {
    id = "a";
  }

  if (id.length >= 16) {
    id = id.slice(0, 15);
  }

  if (id[id.length - 1] === ".") {
    id = id.slice(0, id.length - 1);
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
// 풀었다! 2022 05 03 indexOf(,X) 부분에 탐색 시작 위치를 정하면 중복 탐색을 피할 수 있음.
