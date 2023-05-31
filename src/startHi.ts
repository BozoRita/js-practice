function startHi(str: string){
    if (str[0] === "h" && str[1] === "i"){
        let result = true
        return result
    }
    else {
        let result = false
        return result
    }
  
}

let res1 = startHi('hi there') // true
let res2 = startHi('hi') //true
let res3 = startHi('hello hi') //false

console.log(res1);
console.log(res2);
console.log(res3);

export{}

/*Bálint megoldása: 
nincs meg a ts-file
*/