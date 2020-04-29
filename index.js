// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

let x = [1,2,3,59]
let y = x.every((a)=> a<100)

let x1=[1,2,3,4]
let y1= x1.some((a)=>a >2)

let arr= [[1,2],3,5,[2,[4]]]
flat.innerHTML = "Flat " + arr.flat() 


every.innerHTML = 'Every ' + y;
some.innerHTML = 'some ' + y1;
