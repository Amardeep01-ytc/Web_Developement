alert("hello duniya...  ");

console.log("This is printing stmt in js");
// anoter way to execute js is a runtime like node.js which can beinstalled and use to run js code.
// JavsScript can be executed right inside one's browser.
//  you can open the JavaScript console and start writing js there it will also possible

//we have another way to execute js is by interacting it inside <script> tag of HTML element

let a = 5;
let b = 6;
let c = "India";
 console.log(a+b);
//here a= a+4; Is allowed..
console.log(typeof a, typeof c);
// typeof is used to check the name of variable


//  const c = 4;
//  c= c+4;
//  console.log(c);
// is Not Allowed , Because const is blocked scope let

// Datatypes:
// 1. Primitive Datatype : It is set of basic datatypes in JS 
//                     there are 7 Primitive datatypes in js 
//                     1.Null : Nothing 
//                     2.Number : any Number
//                     3.string : whatever written in double quotes ("")
//                     4.Symbol :
//                     5.Undefined : variable which has no value
//                     6.Boolean: True or false
//                     7.BigInt: Large Integers

let p = "India";
let q = 43;
let r = 67.67;
const s = true; 
let t = undefined;
let u = null;

console.log(p, q, r, s, t, u);
console.log(typeof p, typeof q, typeof r, typeof s,typeof t, typeof u);


// Object:
//        object in javascript can be created as follows.
//        in key-value pair 
//        key-value pair is primitive / non-primitve / object.
//        eg.here "name" is key and "Amardeep" is value


let o ={
    "name" : "amardeep",
    "job code" : 56545
}
console.log(o);
