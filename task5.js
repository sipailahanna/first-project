let initialArray = [1,2,3,4,5];

let deleteCount = 0;
initialArray.splice(1, deleteCount, 'a', 'b');
initialArray.splice(6, deleteCount, 'c');
initialArray.splice(8, deleteCount, 'e');

console.log(initialArray);