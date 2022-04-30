function solution(new_id) {
    id = new_id

    id = id.toLowerCase();
    
    id.replace( /[a-z][0-9][-,_,.]/g , '' );

    id.replace(/[.]{2,}/g, '.');

    if (id[0] === '.') {
        id.slice(0,1);
    }
    if (id[-1] === '.') {
        id.slice(-1,1);
    }
    if (id === ''){
        id = 'a';
    }
    if (id.length >= 16){
        id.slice(15,-1);
    }
    if (id[-1] === '.') {
        id.slice(-1,1);
    }
    if (id.length === 2 ) {
        id += id[1];
    }
    if (id.length === 1 ) {
        id += id[0];
        id += id[0];
    }
    return id;
    }
    
    


console.log(solution("...!@BaT#*..y.abcdefghijklm"))
console.log('The correct answer is !!! bat.y.abcdefghi !!! ')