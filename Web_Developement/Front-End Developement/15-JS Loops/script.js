console.log('Loops code')


//Types of loops - 
// for loops : loop a block of code no of times
// for in loop : loops throough the key of object   not uses 
// for of loop : loop through the values of object   not uses 
// while loop : loops a block based on specific conditions 
// do while loop : while loop varient which runs atlest once    not uses 
let a = 1 
for (let i = 0; i < 10; i++) {
    console.log(a + i);
    
}

let obj = {
    name :  'abc',
    compeny : 'xyz',
    salary : '13 lpa'
}
for (const key in obj) {
     {
        const element = obj[key];
      console.log(key ,element)  
    }
}

var c = [12,14,16,18,20];
var d = c;

 d.pop();     //     to delete last element in array 
console.log(d);
