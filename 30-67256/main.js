// 2022-05-03 키패드 손가락 문제

function distance(now, target) {
  let yline1 = [7, 8, 9];
  let yline2 = [4, 5, 6];
  let yline3 = [7, 8, 9];
  let yline4 = [0];
  let xline1 = [1, 4, 7];
  let xline2 = [2, 5, 8, 0];
  let xline3 = [3, 6, 9];
  let xnow = 0;
  let ynow = 0;
  let xtarget = 0;
  let ytarget = 0;

  if (yline1.includes(now) === true) {
    //now Y
    ynow = 1;
  } else if (yline2.includes(now) === true) {
    ynow = 2;
  } else if (yline3.includes(now) === true) {
    ynow = 3;
  } else if (yline1.includes(now) === true) {
    ynow = 4;
  }

  if (yline1.includes(target) === true) {
    // target y
    ytarget = 1;
  } else if (yline2.includes(target) === true) {
    ytarget = 2;
  } else if (yline3.includes(target) === true) {
    ytarget = 3;
  } else if (yline4.includes(target) === true) {
    ytarget = 4;
  }

  if (xline1.includes(target) === true) {
    //x target
    xtarget = 1;
  } else if (xline2.includes(target) === true) {
    xtarget = 2;
  } else if (xline3.includes(target) === true) {
    xtarget = 3;
  }

  if (xline1.includes(now) === true) {
    //x now
    xnow = 1;
  } else if (xline2.includes(now) === true) {
    xnow = 2;
  } else if (xline3.includes(now) === true) {
    xnow = 3;
  }
  let xd = Math.abs(xnow - xtarget);
  let yd = Math.abs(ynow - ytarget);

  return xd + yd;
}




function solution(numbers, hand) {
  let lp = (1,1);
  let rp = (3,1);
  let answer = [];
  let p1 = (1,4);
  let p2 = (2,4);
  let p3 = (3,4);
  let p4 = (1,3);
  let p5 = (2,3);
  let p6 = (3,3);
  let p7 = (1,2);
  let p8 = (2,2);
  let p9 = (3,2);
  let p0 = (2,1);
  for (i=0; i == numbers.length - 1 ; i ++){
    
    n = numbers[i]

    if (n === 1){
      lp = p1;
      answer = answer.push('L');
    }
    else if (n === 4){
      lp = p4;
      answer = answer.push('L');
    }
    else if (n === 7){
      lp = p7;
      answer = answer.push('L');
    }
    else if (n === 3 ){
      rp = p3;
      answer = answer.push('R');
    }
    else if (n === 6 ){
      rp = p6;
      answer = answer.push('R');
    }
    else if (n === 9 ){
      rp = p9;
      answer = answer.push('R');
    }


    else if (n === 2){
      if ( distance(lp , 2) < distance(rp , 2) ){
        lp = p2;
        answer = answer.push('L');
      }
      else if ( distance(lp , 2) > distance(rp , 2) ){
        rp = p2;
        answer = answer.push('R') ;
      }
      else if ( distance(lp , 2) === distance(rp , 2) ){
        if (hand === 'left'){
          lp = p2;
          answer = answer.push('L');
        }
        else if (hand === 'right'){
          rp = p2;
          answer = answer.push('R')
        }     
      }
    }
    else if (n === 5){
      if ( distance(lp , 5) < distance(rp , 5) ){
        lp = p5;
        answer = answer.push('L');
      }
      else if ( distance(lp , 5) > distance(rp , 5) ){
        rp = p5;
        answer = answer.push('R') ;
      }
      else if ( distance(lp , 5) === distance(rp , 5) ){
        if (hand === 'left'){
          lp = p5;
          answer = answer.push('L');
        }
        else if (hand === 'right'){
          rp = p5;
          answer = answer.push('R')
        }
      }
      }

    else if (n === 8){
      if ( distance(lp , 8) < distance(rp , 8) ){
        lp = p8;
        answer = answer.push('L');
      }
      else if ( distance(lp , 8) > distance(rp , 8) ){
        rp = p8;
        answer = answer.push('R') ;
      }
      else if ( distance(lp , 8) === distance(rp , 8) ){
        if (hand === 'left'){
          lp = p8;
          answer = answer.push('L');
        }
        else if (hand === 'right'){
          rp = p8;
          answer = answer.push('R')
        }

    else if (n === 0){
      if ( distance(lp , 0) < distance(rp , 0) ){
        lp = p0;
        answer = answer.push('L');
      }
      else if ( distance(lp , 0) > distance(rp , 0) ){
        rp = p0;
        answer = answer.push('R') ;
      }
      else if ( distance(lp , 0) === distance(rp , 0) ){
        if (hand === 'left'){
          lp = p0;
          answer = answer.push('L');
        }
        else if (hand === 'right'){
          rp = p0;
          answer = answer.push('R')
        }
      }
    }
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5] , "right" ) );

//tlqkf 중괄호 잘 닫앗는데 안닫혔대 뭐가 문제야