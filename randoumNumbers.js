//* معکوس کردن اعداد در خود آرایه
const randomNumbers = [53, 16, 65, 100, 64, 83, 41, 98, 16, 93];
for (let i = 0; i < Math.floor(randomNumbers.length / 2); i++) {
  let temp = randomNumbers[i];
  randomNumbers[i] = randomNumbers[randomNumbers.length - 1 - i];
  randomNumbers[randomNumbers.length - 1 - i] = temp;
}
console.log(randomNumbers);