function solution(new_id) {
    idlist = [];
    for (i of new_id){
        idlist.push(i);
    }
    for (i of idlist){
        if (i === i.toUpperCase()) { //대==>소 변환
            i = i.toLowerCase();
        }
        if ( (i != i.toLowerCase()) && (isNaN(i)) && ( !! '-' ) && (!! '_') && (!! '.') ) {
            idlist.splice(i,1); // i 지우기
        }
        if ( (i === '.') && ()) ){

        }
        
    }
    var answer = '';
    return answer;
}