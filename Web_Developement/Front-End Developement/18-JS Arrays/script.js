let arr = [1,2,3,4,5]

console.log(arr)
console.log(arr.length) //shows the length of array
//arrays are mutable i.e we can change the arrays
arr[0] = 9090; //we can change the index of particular array 

console.log(arr[0]) //shows the length of particular obj

console.log(arr.toString()) //convert arrays as a STRING 

console.log(arr.join(" and ")) //converts ' , ' into ' and '

console.log(arr.pop()) //removes last element in array 
console.log(arr)

console.log(arr.shift())//removes first element of array 
console.log(arr)

console.log(arr.push(90)) //adds any number or string in the last member of an array
// console.log(arr.push("JavaScript")) //By this way we can add strings to array
console.log(arr)

console.log(arr.unshift("HTML")) // adds numeber or string in the first member of array 
console.log(arr)

// console.log(arr.delete[2]) //Delete the arry element 
let a = [1 , 2 , 3]
let b = [4 , 5 , 6]
let c = [7 , 8 , 9]

console.log(a.concat(b,c))//Used to join  arrays


