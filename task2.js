const today = new Date();
const startDay = new Date(2000,1,1);

let amountOfFridays = 0;
console.log(today);
do {
    if(startDay.getDay() === 5 && startDay.getDate() === 13)
    {
        amountOfFridays++;
    }
    startDay.setDate(startDay.getDate() + 1);
} while(today.valueOf() > startDay.valueOf());


console.log("Fridays 13th:" + amountOfFridays);