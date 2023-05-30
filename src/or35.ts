function or35(n: number){
  
    if (0 === n % 3 || 0 === n % 5){
        let result = true
        return result
    }
    else (0 !== n % 5 || 0 !== n % 3){
        let result = false
        return result
    }
  }

let res1 = or35(3) //true
let res2 = or35(10) //true
let res3 = or35(8) //false

console.log(res1);
console.log(res2);
console.log(res3);

export{}