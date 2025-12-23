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