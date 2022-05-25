
const flatten = (inputArray, myNewArray =[]) => {

   
    inputArray.forEach(element => {
        Array.isArray(element) ? flatten(element, myNewArray) :  myNewArray.push(element);   
    });

    return myNewArray;
}

let input = [1,2,[3,4],5,[6,7,8],9,[10,11,[12,13,14]],15];

const result = flatten(input);
console.log(result);