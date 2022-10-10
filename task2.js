let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 40));
console.log(arr);
const maxvalue = Math.max(...arr);
console.log(maxvalue);