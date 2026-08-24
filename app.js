const students=[
    {name:"nirmal", age:22, marks:45},
    {name:"nirmala", age:21, marks:55},
    {name:"nims", age:2, marks:95}
];
//forEach
students.forEach(student=>{
    console.log(student.name);
});
//filter
const passed=students.filter(student=>student.marks >= 45);
console.log(passed);
//map
const studentNames = students.map(student => student.name);
console.log(studentNames);
//filter+map
const adultNames= students.filter(student=>student.age>=18)
.map(student=>student.name);
console.log(adultNames);
//top
const topstd= students.filter(student=>student.marks >= 80)
.map(student=>student.name);
console.log("topper is:" + topstd);