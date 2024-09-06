console.log('Hello, world');

//Object Literal

var student ={
    studentId : 1,
    studentName : "Shyam",
    studentAge : 20,
    city : "NY"
}

console.log(student)
console.log(student.city)
console.log(student.studentAge)
console.log(typeof student)


for(let key in student){
    console.log(key)
    console.log(student[key])
}

// Same for loop as above just we are formating string
for(let key in student){
    console.log(`${key} -> ${student[key]}`)
}

//Object Destructuring
var emp = {
    empId: 1,
    empName: "John",
    empAge: 20,
    empCity: "New York"
}

var {empId, empName, empAge, empCity} = emp
var result = "Pass"
console.log(empId)
console.log(empName)
console.log(empAge)
console.log(empCity)

var newEmp = {
    empId,
    empName,
    empAge,
    empCity,
    result
}

var emp1 = {
    ...emp,
    result
}