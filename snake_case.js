// snake case
let str = "slm be shoma khubin??";
let resultSnake = "";

for(let i = 0; i < str.length; i++){
    if(str[i] === " "){
        resultSnake += "_";
    }else{
        resultSnake += str[i].toLowerCase();
    }
}
console.log(resultSnake);