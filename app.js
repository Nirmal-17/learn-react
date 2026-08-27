const users=[
  {
    id:1,
    name:"nirmal",
   age:17
  },
{
    id:2,
    name:"john",
    age:23
}];
//map
const result= users.map(user=>user.name);
console.log(result);
//filter
const age=users.filter(user=>user.age>18);
console.log(age);
//destructuring
const { id } = users[1];
console.log(id);
