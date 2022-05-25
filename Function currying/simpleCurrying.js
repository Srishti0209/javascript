const simpleCurrying = (firstNumber) => {
    return (secondNumber) => {
        return (thirdNumber) => {
            return firstNumber + secondNumber + thirdNumber;
        }
    }
}

const output = simpleCurrying(2)(3)(5);
console.log(output);