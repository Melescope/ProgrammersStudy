// 2022-05-01 , 정수 배열이 주어지면 2개 뽑아서 더한 결과들을 오름차순으로 정리해서 list 리턴

function solution(numbers) {
    answerList = []
    for (i of numbers) { 
        for(j of numbers){
            console.log('더할 두 수는' , i , j , '그 합은' , i+j)
            if (numbers.indexOf(i) != numbers.indexOf(j)){ //index가 다를 것!...근데 i랑 j가 다른 1이어도 indexOf는 앞에서부터 index를 센다. 이거 어케함.
                answerList.push(i+j);
            }
        }
    }// answerList의 중복값을 싹 정리하자
    ans = new Set(answerList); // set으로 중복값 제거
    answer = Array.from(ans); // 다시 배열로
    answer = answer.sort();  //오름차순 정렬
    return answer;
}
console.log( solution([2,1,3,4,1]) )