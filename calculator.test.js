import calculator from "./calculator";

test('Expects calculator.add(2,2) to be 4',()=>{
    expect(calculator.add(2,2)).toBe(4);
})

test('Expects calculator.subtract(2,2) to be 0',()=>{
    expect(calculator.subtract(2,2)).toBe(0);
})

test('Expects calculator.multiply(2,2) to be 4',()=>{
    expect(calculator.multiply(2,2)).toBe(4);
})

test('Expects calculator.divide(2,2) to be 1',()=>{
    expect(calculator.divide(2,2)).toBe(1);
})