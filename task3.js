function getNum1() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000, Math.floor(Math.random() * 5) + 1);
    });
}

function getNum2() {
    return new Promise((resolve) => {
        setTimeout(resolve, 5000, Math.floor(Math.random() * 10) + 6);
    });
}

async function getResult() {
    const number1 = await getNum1();
    const number2 = await getNum2();
    console.log(number1 + number2);
}

getResult();