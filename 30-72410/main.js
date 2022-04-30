function solution(new_id) {
    id = new_id
    console.log('원본 ', id);

    id = id.toLowerCase();
    console.log('대문자를 소문자로 바꾸기' , id);
////////////////////////////////////////////////
    id.replace( /[a-z], [0-9],[-,_,.] /g , '' );
    console.log('특수문자 삭제하기 ' , id);

    id.replace(/.{2,}/g, '.');
    console.log('...처럼 연속된 마침표를 한 개의 .으로 합치기' , id);

    if (id[0] === '.') {
        id.slice(0,1);
    }
    console.log('첫 글자가 .이면 없애기',id);

    if (id[-1] === '.') {
        id.slice(-1,1);
    }
    console.log('마지막 글자가 .이면 없애기',id);

    if (id === ''){
        id = 'a';
    }
    console.log('공백이면 a만 남기기' , id);

    if (id.length >= 16){
        id.slice(15,-1);
    }
    console.log('16자 이상이면 넘어간 부분은 짤라버리기',id);

    if (id[-1] === '.') {
        id.slice(-1,1);
    }
    console.log('마지막 글자가 . 이면 자르기',id);

    if (id.length === 2 ) {
        id += id[1];
    }
    console.log('2글자라면 2번째 글자를 3번째 글자로 복붙하기',id);

    if (id.length === 1 ) {
        id += id[0];
        id += id[0];
    }
    console.log('1글자라면 그 글자를 복붙해서 3글자 맞추기' ,id);

    return id;
    }
    
    


console.log(solution("...!@BaT#*..y.abcdefghijklm"))
console.log('The correct answer is !!! bat.y.abcdefghi !!! ')
console.log('하 시발')
