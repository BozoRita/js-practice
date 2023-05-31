function mixStart(str: string){
  return str[1] === "i" && str[2] === "x"
}

let res1 = mixStart('mix snacks') //true
let res2 = mixStart('pix snacks') //true
let res3 = mixStart('piz snacks') //false

console.log(res1);
console.log(res2);
console.log(res3);

export {}

/*Bálint megoldása: 
nincs meg a ts-file
*/