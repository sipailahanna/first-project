class User {
    name;
    constructor(name) {
        this.name = name;
    }
    rollTheDice () {
        let arr = [1,2,3,4];
        let randomValue = arr[Math.floor(Math.random() * arr.length)];
        return randomValue;
    }
    getName () {
        return this.name;
    }
};

const user1 = new User("Hanna");
const user2 = new User("Ivan");

let i = 0;
let resultOfFirstUser = 0;
let resultOfSecondUser = 0;

while(i < 3) {
    resultOfFirstUser = resultOfFirstUser + user1.rollTheDice();
    resultOfSecondUser = resultOfSecondUser + user2.rollTheDice();
    i++;
}

if (resultOfFirstUser === resultOfSecondUser) {
    console.log("ничья");
} else if (resultOfFirstUser > resultOfSecondUser) {
    console.log(user1.getName() + " победил");
} else {
    console.log(user2.getName() + " победил");
}