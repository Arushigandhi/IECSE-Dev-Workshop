// alert("Hi from external file");

// var object = {
//     a : 1,
//     b : "String",
//     c : true
// }

// var name = "Arushi";
// alert(`Hello ${name}`);

// console.log(object.b)


//Declaring variables

// var a = true;
// let b = false;
// const c = false;

// // if (true) {
// //     let c = "hahah";
// //     b = "new value";
// //     console.log("inside",b)
// // }

// c = "new"



//Arrays
// let array = [1,"String",true,undefined]
// console.log(array[1]) 


//conditionals

// let a = 4;
// let b = 5;

// if (a > b) {
//     //code
//     console.log("Print");
// } else if (a < 2) {
//     console.log("not printing");
// } else {
//     console.log(false)
// }

// let c = a === b ? "equal" : "not equal";

// console.log(c)

// switch(a) {
//     case 4:
//         console.log("a is 4");
//         break;
//     case 5:
//         console.log("a is 5");
//         break;
//     default:
//         console.log("a is unknown");
//         break;

// }

// if (!(a === 3)) {
//     console.log(true);
// }



//Functions 


// const abc = () => {
//     console.log(true)
// }

// abc()

// let arr = [1,"string",true,false];

// arr.forEach((item,index) => {
//     console.log(iteim)
// })



// let a = prompt("First value");
// let b = prompt("Second value");

// let ans = Number(a) + Number(b);

// alert("Ans is " + ans);

//DOM


let heading = document.querySelector("#heading1")
let head = document.querySelector("#head")

// let button = document.querySelector("#submit")


// console.log(heading)


// heading.innerHTML = heading.innerHTML + " hi"

// function handleClick() {
// heading.innerHTML = "red"

// }

// let input = document.querySelector("#input")

// function handleChange() {
//     console.log(true)
// }

// button.addEventListener("click",handleChange)

// button.removeEventListener("click",handleChange)


// let newEle = document.createElement("a");

// newEle.href = "https://www.w3schools.com/js/js_htmldom_events.asp"

// newEle.style.color = "red"

// newEle.innerHTML = "iecse"

setTimeout(function () {
    heading.removeChild(head)
},5000)





