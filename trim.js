// trim
let str = "   slm khubin?   ";
let start = 0;
let end = str.length - 1;


for (let i = 0; i < str.length; i++){
    if(str[i] !== " "){
        start = i;
        break;
    }
}

for (let i = str.length - 1; i >= 0; i--){
    if(str[i] !== " "){
        end = i;
        break;
    }
}

console.log(str.substring(start, end + 1));