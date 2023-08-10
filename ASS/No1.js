function cubeNumber(number) {
    if (typeof number !== 'number' || number <= 0) {
        return "Please provide a positive number.";
    }
    
    const result = number ** 3;
    return result;
}

const input1 = 3;
const input2 = 4;

console.log(cubeNumber(input1));
console.log(cubeNumber(input2));
