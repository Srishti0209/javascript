const advancedCurrying = (...args) => {
    const firstArgument = args.reduce((a,b)=> a+b, 0);
    return (...args) => {
        const nextArgument = args.reduce((a,b) => a+b, 0);
        if(nextArgument)
            return advancedCurrying(firstArgument + nextArgument);

        return firstArgument;
    }
}


const output = advancedCurrying(1,2,3)(5,6,7)(8,2,3,4)();
console.log(output);