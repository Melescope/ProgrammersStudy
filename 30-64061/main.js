// 2022 05 01 시작 - 인형뽑기

function samepang(L) { // 마지막이 같은 원소가 2개면 지우는 함수. L은 쌓인 인형 리스트
    for (i in L) {
                
        if ( ( (L.length) > 1 ) && (L[L.length-1] === L[L.length-2]) ) {
            L = L.splice(L.length-2,2);
                      
        }
    }
    return L
}
function solution(board, moves) {
    panglist = [];
    count = 0
    for (i of moves){ //각 move 명령 == i
        for (h of board){ // h는 높이, 가장 윗줄부터 0 1 2
            if (h[i-1] != 0 ){
                panglist.push(h[i-1]);
                h[i-1] = 0;
                if (panglist[panglist.length-1] === panglist[panglist.length-2]){
                    samepang(panglist);
                    count += 2
                }
                break;
            }
        }
        console.log('현재 panglist는 ' , panglist)
    }
    return count;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]] , [1,5,3,5,1,2,1,4] ))