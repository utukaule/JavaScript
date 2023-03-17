
//1. Ways to print in js
// console.log("this is me")
// alert("alert");
// document.write("this is another type to write on the document");

//2. JS console API
// console.log("this is one",4+6,"we can pass multiple arguments");
// console.warn("this is sencond");
// console.error("this is third");

//3. Javascript variables
// Variables are containers to store the values.

var num1 = 34;
var num2 = 66;
// console.log(num1+num2)

// 4. Data types in javascript

//String
var str1 = "this is string";
var str2 = 'this is string 2';

// number
var num1 = 1;
var num2 = 2;

//5. Objects
var marks = {
    ravi:34,
    utu:54,
    harry:45
}
// console.log(marks);

//6. boolens
var a = true;
var b = false;
// console.log(a,b);

//7. undefined
var und = undefined;
// console.log(und);
var z;
// console.log(z)
// The above variable z is also undefined because you never told what to store init.
// The variable which does not contain any value is knows as undefined.
// undefined means you created the variable but never assign a value.

//8. Null
var n = null;
// console.log(n);
// null means empty.

//9.Arrays
// collection of (string, number, arrays, object)

var arr = [1,2,4,5,5]
// console.log(arr[0]);
// console.log(arr); 
    // Array methods
    // console.log(arr.length);
    arr.pop()
    // console.log(arr);
    arr.push('this is new me');
    // console.log(arr)
    // console.log("shift remove first element of array")
    arr.shift() //this with remove first element of array
    // console.log(arr);
    // console.log("unshift will add utu in front")
    // arr.unshift('utu')
    // console.log(arr);

    arr.toString()
    // console.log('this will convert arr into string');
    // console.log(arr)

    let arr3 = [1,2,41,2,4,123,123,456324]
    arr3.sort()
    // console.log("this will sort the arr3 in asending order");
    // console.log(arr3);


//10. There are 2 types of data types
    // 1.Primitive  :-  undefined, null, number, string, boolean, symbol
    // 2.Non-primitive  :-  Arrays and objects



//11. Operators in js

// Arithmetics operators + - * /

// Assignment operators 
var x = 10
var c = x; //assigning value of x to c


// comparison operators == >= <= < >

// Logical operators && || !
    // Logical AND &&
    // Logival OR ||
    // Logical NOT !



// 12. Functions
// DRY = Do not repeat your self.
function avg(q,w){
    return (q+w);
}
c = avg(4,5);
// console.log(c)

// 13. ForEach loop
var arr2 = [1,2,3,4,5,6,7];
// arr2.forEach((e)=>{
//     console.log(e);
// })


//14. String methods
let str3 = 'utu is a good good boy';
// console.log(str3.length)
// console.log(str3.indexOf('good'));
// console.log(str3.lastIndexOf('good'))
// console.log(str3.slice(0,4))
// look online for more methods related to strings 
// let d = str3.replace('utu','syndicate')
// replace will reture a new string
// console.log(d);


//15. Date
// look for date methods
let mydate = new Date()
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear())
// console.log(mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds())


// 16. DOM Manipulation
let clickme = document.getElementById('click');
// console.log(clickme);

let one1 = document.getElementsByClassName('one');
// console.log(one1)
one1[0].style.fontSize = '30px'
one1[0].classList.add('three'); 
// console.log(one1[0].innerText);
// console.log(one1[0].innerHTML);
let four = document.createElement('p')
four.innerText = 'This is me appending new tag';

one1[0].appendChild(four)
// console.log(one1);



// 17. Selecting using query
let sel = document.querySelector('.one')
// console.log(sel)

let seltwo = document.querySelectorAll('.one')
// console.log(seltwo)



// 18. Events in js
// events is like onClick, onMouseOver, onLoad etc

function clicked(){
    // console.log('button is clicked');
}
window.onload = function(){
    // console.log('document is loaded completely');
}

let prevHtml = document.querySelectorAll('.two')[0].innerHTML;


// 19. addEventListener

one1[0].addEventListener('mouseup',()=>{
    document.querySelectorAll('.two')[0].innerHTML = prevHtml;
})

one1[0].addEventListener('mousedown',()=>{
    // console.log('click hue');
    document.querySelectorAll('.two')[0].innerHTML = "<p>we changed the innerHTML of two by clicking on container one</p>"
})



// 20. setTimeout and setInterval
// Arrow function
// function sumone(a,b){
//     return a+b;
// }
// sumtwo = (a,b) => {
//     return a+b
// }

    //setTimeout
    logkaro = ()=>{
        document.querySelectorAll('.two')[0].innerHTML = "<p>Do second ke bad aaunga ok?</p>"
        console.log('me aa gaya')
    }
    // setTimeout(logkaro,2000) 
    // To stop setTimeout use clearTimeout

    // setInterval

    // let stop = setInterval(logkaro,2000);
    // To stop setInterval use clearInterval



// 21. Local Storage
    //js localstorage
    // -> Localstorage is used to store the data 
    //    on user machine or computer as a string.
    
    // localStorage.setItem('name','utkarsh')
    // localStorage.getItem('name');
    // localStorage.removeItem('name');
    // localStorage.clear()


// 22. JSON (javascript object notation)
    // -> it is open standard file Formate
    // -> used to exchange the data
    // -> we can stringify the data to transport it and then we can again 
    //    take it from storage and display in object formate.
    // let obj = {
    //     name:'utu',
    // }
    // let jso = JSON.stringify(obj);
    // console.log(jso);

    // let parse = JSON.parse(jso);
    // console.log(parse);


// 23. JavaScript versions (ECMAScript)
