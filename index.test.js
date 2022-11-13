import Calculator from "./calculator";

test('sum of 1 and 2 equal 3', () => {
    const calculator = new Calculator();
    expect(calculator.add(1,2)).toBe(3);
})

test('multiply of 1 and 2 equal 2', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(1,2)).toBe(2);
})

test('multiply of 1 and 0 equal 0', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(1,0)).toBe(0);
})

test('substraction of 2 and 1 equal 1', () => {
    const calculator = new Calculator();
    expect(calculator.subtraction(2,1)).toBe(1);
})

test('division of 2 and 1 equal 2', () => {
    const calculator = new Calculator();
    expect(calculator.divide(2,1)).toBe(2);
})

test('division of 2 and 0 equal infinity', () => {
    const calculator = new Calculator();
    expect(calculator.divide(2,0)).toBe(Infinity);
})

test('exponentiation of 2 and 2 equal 4', () => {
    const calculator = new Calculator();
    expect(calculator.exponentiation(2,2)).toBe(4);
})
