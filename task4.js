const [,,number1, number2] = process.argv;
console.log(JSON.stringify(getResult(number1, number2)));

function getResult(number1, number2) {
    const symbols1 = number1.toString().split('');
    const symbols2 = number2.toString().split('');
    return symbols1.reduce((result, symbol, index) => {
        if (symbols2[index] === symbol) result.fullyEqual++;
        if (symbols2.includes(symbol)) result.equalByValue++;
        return result;
    }, {fullyEqual: 0, equalByValue: 0})
}