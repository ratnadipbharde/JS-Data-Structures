console.log("JS Data Structures");
console.log("Generates 10 Random 3 Digit number.")
console.log(getRandomNumber(10));
console.log("Store this random numbers into a array.")
let arr=addIntoArray(10);
console.log("Print Array.")
printArray(arr);

function getRandomNumber(number) {
    let n = number;
    for (let index = 1; index < n; index++) {
        console.log(genrateThreeDigitRandomNumber())
    }
}

function genrateThreeDigitRandomNumber() {
    let n = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    return n;
}

function addIntoArray(numberOfElement) {
    let array = [];
    for (let index = 0; index < numberOfElement; index++) {
        let n = genrateThreeDigitRandomNumber();
        array.push(n);
    }
    return array;
}

function printArray(array){
  for (let index = 0; index < array.length; index++) {
    console.log((index+1)+") "+array[index]);
  }
}