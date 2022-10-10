let arr = Array.from({length: 50}, () => Math.floor(Math.random() * 40));
const set = [...new Set(arr)];
console.log(set);