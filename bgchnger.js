const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let changebgColor = function changebgColor() {
    document.body.style.background = randomColor();
}

let intervalid;

const startChangingColor = function(){

    if (!intervalid) {
        intervalid = setInterval(changebgColor,1000);
    }
    
    changebgColor();
};
const stopChangingColor = function(){
    clearInterval(intervalid);
    intervalid = null;
};

const startbtn = document.querySelector('#start').addEventListener('click', startChangingColor);

const stopbtn = document.querySelector('#stop').addEventListener('click', stopChangingColor);