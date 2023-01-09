console.log("JS Data Structures")

genrateThreeDigitRandomNumber(10);

function genrateThreeDigitRandomNumber(number){
    for (let index = 1; index <= number; index++) {
        console.log(index+") "+ Math.floor(Math.random() * (999 - 100 + 1) + 100));  
    }
}