// 2022 05 01 시작
function solution(s) {
    s = s.replace(/zero/g,0);
    s = s.replace(/one/g,1);
    s = s.replace(/two/g,2);
    s = s.replace(/three/g,3);
    s = s.replace(/four/g,4);
    s = s.replace(/five/g,5);
    s = s.replace(/six/g,6);
    s = s.replace(/seven/g,7);
    s = s.replace(/eight/g,8);
    s = s.replace(/nine/g,9);
    return parseInt(s);
}
console.log(solution("one4seveneight"));
// 맞았다! JS에서는 정수로 바꿔주는 게 parseInt()다.