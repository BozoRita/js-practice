function notString(str: string){
  if (str[0] === "n" && str[1] === "o" && str[2] === "t") {
    let result = str
    return result
  }
  else {
    let result = "not" + "" + str
    return result
  }
}

let res1 = notString('candy') //not candy
let res2 = notString('x') //not x
let res3 = notString('not bad') //not bad	
let res4 = notString('bad') //not bad
let res5 = notString('not') //not

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);

export{}