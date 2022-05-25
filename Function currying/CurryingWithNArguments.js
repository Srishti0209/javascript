const curryNthArgument = (firstArgument) =>{

    return (nextArgument) => {
        if(nextArgument)
            return curryNthArgument(firstArgument + nextArgument) 
         
            return firstArgument;
    }
}

const output = curryNthArgument(2)(3)(3)(4)();  // infinite currying
console.log(output);