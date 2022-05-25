/*

Throttling is basically used to increase the performance of the website. 
In this, a heavy loaded function on any event will be called only after a particular 
time. And in between if user tries to scroll/click on the button the event will
not be fired.

*/
let timerId;
const domId = document.getElementById('dom-id');
domId.addEventListener('scroll', function(){
    debugger;
    const element = document.getElementById('counter');
    let value = element.innerHTML || 0;
    value = parseInt(value) + 1;
    throttleFunc();
    element.innerHTML = value;
});

throttleFunc = function(delay){
    if(timerId){
        return;
    }
    timerId = setTimeout(()=> {
        timerId = null;
        const throttleElem = document.getElementById('throttle-counter');
        let throttleValue = throttleElem.innerHTML || 0;
        throttleValue = parseInt(throttleValue) + 1;
        throttleElem.innerHTML = throttleValue;
    }, 1000);
}