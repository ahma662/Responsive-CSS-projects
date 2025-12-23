// let num = 29;
// let mn = prompt ("Guess the number");
// while(num != mn) {
//    mn = prompt("You entered the wrong number. Try again");
// }
//    console.log("Congratulations! You entered the correct number");
//    let str = "Ahmed";
//    console.log(str.slice(2,4));
//    let obj = {
//     Name:"Pen",
//     price:199,
//    };
//    let output = `The price of ${obj.Name} is ${obj.price} rupees`;
//    console.log(output);
//    let specialstring =`This is special case`;
//    console.log(specialstring);
//    //Template Liteals//
//    let strin = `this is a template literal ${1+23+9}`;//expression can be calculated lively during string evaluation
//    console.log(strin);
// let fullName =prompt ("Enter Full Name without spaces");
// let username = "@"+fullName+ fullName.length;
// console.log(username);
// let marks = ["89","98","78","90","95","88"];
// console.log(marks);
// marks[2] = "46";
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// let avg = 1;
// for(let val of marks) {
//    sum += val;
//    avg = sum/marks.length;
// }
// console.log("The sum is ",sum);
// console.log(`The average Marks is ${avg}`);//Use Template Literal

// const btn = document.getElementById("btn"); 

//     btn.addEventListener("click", () => {
//       btn.textContent = "Loading...";
//       btn.style.background = "linear-gradient(135deg, #00c6ff, #0072ff)";
//       setTimeout(() => {
//         btn.textContent = "Next →";
//         alert("You clicked the button! 🎉");
//       }, 1000);
//     });


const msg = console.log("Hello  world!");

const mainHeading = document.getElementById('heading');
console.log(mainHeading);
mainHeading.innerHTML = "Welcome To Developer's World";


const cls = document.getElementsByClassName('head'); 
console.log(cls);


const btn = document.getElementById('btn');
btn.addEventListener("click", () => {
   btn.textContent = "Loading...";
   btn.style.background = "linear-gradient(180deg, red, blue)";
   setTimeout(() => {
      btn.textContent = "Next →";
      alert("You Clicked that button");
   }, 1000);
});
