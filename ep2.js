// document.getElementById('n-1').onclick = function () {
//     alert("Clicked Img");
// }
// document.getElementById('images').addEventListener('click', function (e) {
//     console.log("External Clicked");
// }, false)  //Bubbling ---Inner First_Outer Last---
document.getElementById('images').addEventListener('click', function (e) {
    console.log("External Clicked");
}, false);  //Event Capturing --outer first_Inner Last--- 

document.getElementById('n-2').addEventListener('click', function () {
    console.log("Img2 is Clicked");
    e.stopPropagation();
}, false);

document.getElementById('google').addEventListener('click', function (e) {
    console.log("Google Clicked");
    e.preventDefault();
}, false);



let count = 0;
const countdisplay = document.getElementById('count');
const increasebtn = document.getElementById('increase');
const decreasebtn = document.getElementById('decrease');
const resetbtn = document.getElementById('reset');

increasebtn.addEventListener('click', () => {
    count++;
    countdisplay.textContent = count;
});

decreasebtn.addEventListener('click', () => {
    count--;
    countdisplay.textContent = count;
});

resetbtn.addEventListener('click', () => {
    count = 0;
    countdisplay.textContent = count;
});

countdisplay.textContent = count;