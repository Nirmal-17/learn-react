//functions in js
function multiply(a,b){
    return (a*b);
}
let res=multiply(8,7);
console.log("product: " + res)
//ARROW FUNCTION
const multiply1=(a,b)=>
    (a*b);

console.log(multiply1(8,7));
//functions
const fruits=["mango","apple","banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
//map vs forEach
const numbers=[1,2,3,4,5];
numbers.forEach(number=>{
    console.log(number*2);
});
//map()
const numb=[1,2,3,4,5];
const result = numb.map(numbs=>numbs*2);
console.log(result);
//filter()
