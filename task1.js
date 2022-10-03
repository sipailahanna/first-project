let str = '1,2,3,4,5,6';
let arrayOfNumbers = str.split(',').map(Number);
let halfArrayIndex = arrayOfNumbers.length / 2;

let sumOfFirstThree = calculateSumOfArrayElements(0, halfArrayIndex);
let sumOfLastThree = calculateSumOfArrayElements(halfArrayIndex, arrayOfNumbers.length);

if (sumOfFirstThree === sumOfLastThree) {
    console.log("да");
} else {
    console.log("нет");
}

function calculateSumOfArrayElements (fromIndex, toIndex) {
    let sum = 0;
    for (let i = fromIndex; i < toIndex; i++) {
        sum = sum + arrayOfNumbers[i];
    }
    return sum;
}
