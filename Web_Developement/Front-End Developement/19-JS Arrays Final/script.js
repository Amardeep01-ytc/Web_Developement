console.log('Arrys Final topic');
//sorting Techniques : it changes the original array

// const num =  ["java", "javascript", "C", "C++"]
// num.sort();
// console.log(num)

const num = [1,32,4,5,8,97,100]

num.sort(compareFunction);
console.log(num);

function compareFunction(a,b){
    //1.  0 < ... a comes first
    //2.  0  ... nothing will change 
    //3.  0 > ... b comes first
    return a-b;
}
