let y = 50;
let parts = getRandomInt(1, 10);
let tempFloat = [];

for (let i = 1; i < parts; i++)
{
    tempFloat[i] = Number(y - getRandomFloat(1, y, 2)).toFixed(2);
    y = Number(y - tempFloat[i]).toFixed(2);
}
tempFloat[parts] = y;
console.log("дробные");
console.log(tempFloat);

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}