'use strict'

//document.getElementById('count-el').innerHTML = 5

  //  console.log('the button was clicked')
//}

let countEl = document.getElementById('count-el')

console.log(countEl);
let count = 0

function increment() {
    console.log('clicked');
    count = count + 1;
    countEl.innerHTML = count;
    console.log(count);
};


let countEl2 = document.getElementById('count-el')
console.log(countEl2);

function decrement() {
   
    
    console.log('clicked');
    count = count - 1;
    countEl.innerHTML = count;
    console.log(count);
    
    
}