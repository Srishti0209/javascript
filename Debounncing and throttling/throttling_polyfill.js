
let api_counter =0;
let counter = 0;
const domElem = document.getElementById('dom-id');

const makeApiCall = () => {
    api_counter++;
    console.log('API call made', api_counter);
}

const throttle = (func, limit) => {
    let throttleFlag = true;
    return function(){
        let context = this;
        let args = arguments;
        console.log('throttle flag', throttleFlag);
        if(throttleFlag){
            console.log('throttle flag', throttleFlag);
            throttleFlag = false;
          func.apply(context, args); // instead of calling func(); directly, if you want to pass some arguments here use apply
            
        
       
        setTimeout(() => {
            throttleFlag = true;
        }, limit);

    }
    }

} 
const betterPerformingFunc = throttle(makeApiCall, 500);
domElem.addEventListener('click', function(){
    console.log('event triggered', ++counter);
    
    betterPerformingFunc();
});



   

