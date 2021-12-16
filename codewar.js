//Q1
/*function remainder(a, b){
   return a > b ? a % b: b % a;
}
remainder(17, 5);*/
//Q2
//10 + 2
function expandedForm(num) {
  if (num > 0) {
    let str = "";
    num.split("").map((el, i) => {
      switch (i) {
          case 0:
              str += "el";
              break;
              //12 10+2
        case 1: {
          str += `${num[i]}0 + ${num[--i]}`;
          } 
          break;
              //345  300 +40 + 5 
        case 2: {
          str += `${num[i]}00 + ${num[--i]}0 +${num[i-2]}`;
          }
          break;
             // 1223 => 1000 + 200 + 20 + 3 
        case 3: {
              str += `${num[i]}000 
          +${num[i-1]}00 + ${num[i-2]}0 +${num[i -3]}`;
          }
          break;
        case 4: {
            str += `${num[i]}0000 
            +${num[i - 1]}000 + ${num[i - 2]}00 +${num[i - 3]}0 + 
            ${num[i - 4]}`;
          }
              break;
          default:
              console.log("Damn u , I don't Know what the next ");
        }
    });
      return str;
  }
}

console.log(expandedForm(122));
