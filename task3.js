let arr = [12, 15, 20, 25, 59, 79];

const getAverage = (arr) => {
    const sum = arr.reduce((acc, number) => acc + number, 0);
    const length = arr.length;
    return sum / length;
};

console.log(getAverage(arr));