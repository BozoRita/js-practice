function startOz(str: string){
  if (str[0] === "o" && str[1] !== "z"){
    return "o"
  }
  else if (str[0] !== "o" && str[1] === "z"){
    return "z"
  }
  else if (str[0] === "o" && str[1] === "z"){
    return "oz"
  }
  return ""
}

let res1 = startOz('ozymandias') // oz
let res2 = startOz('bzoo') //z
let res3 = startOz('oxx') //o

console.log(res1);
console.log(res2);
console.log(res3);

export {}


/*Bálint megoldása: 
nincs meg a ts-file
*/