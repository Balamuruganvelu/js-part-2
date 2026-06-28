let employee = {
    name: "Balamurugan",
    age: 22,
    department: "IT",
    salary: 35000
};

console.log("Employee Name: " + employee.name);
console.log("Employee Age: " + employee.age);
console.log("Department: " + employee.department);
console.log("Annual Salary: " + (employee.salary * 12));

if (employee.salary > 30000) {
    console.log("Senior Employee");
} else {
    console.log("Junior Employee");
}