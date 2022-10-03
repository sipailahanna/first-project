let x = 50;
let parts = getRandomInt(1, 10);
let temp = [];

for (let i = 1; i < parts; i++)
{
    temp[i] = x - getRandomInt(1, x);
    x = x - temp[i];
}
temp[parts] = x;

console.log("целые");
console.log(temp);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


