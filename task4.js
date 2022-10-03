let initialArray = [1,2,3,4,5];

let startIndex = 3;
let deleteCount = 0;
initialArray.splice(startIndex, deleteCount, 'a', 'b', 'c');

console.log(initialArray);