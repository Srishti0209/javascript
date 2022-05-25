const curryingWithDoubleArguments = (a,b) => {
    return (c,d) => {
        return a + b + c + d;
    }
}



const output = curryingWithDoubleArguments(2,3)(3,4);
console.log(output);