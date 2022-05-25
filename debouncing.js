/*

Debouncing is also a technique to improve website performance. This is basically 
used to trigger the api call/ function only after the last event is fired. We can add delay to it. 
It can be used in search and go functionalities or window resizing, where we need to call the api once the user have resized the window and not on
every trigger. 

Both throttling and debouncing are the technique that allows how many times 
the function needs to be executed over time
*/

let timerId;
const search = document.getElementById('search-box');

search.addEventListener('input', function(){
    const apiTrigger = document.getElementById('show-api-call-count');
    let value = apiTrigger.innerHTML || 0;
    value = parseInt(value) + 1;
    apiTrigger.innerHTML = value;
    debounce(makeApiCall, 500);
});

const debounce = (func, delay) => {

    clearTimeout(timerId);

   timerId = setTimeout(func, delay);

}

const makeApiCall = () => {
    const debounceTrigger = document.getElementById('debounce-count');
    let debounceValue = debounceTrigger.innerHTML || 0;
    debounceValue = parseInt(debounceValue) + 1;
    debounceTrigger.innerHTML = debounceValue;
}