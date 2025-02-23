// Task 1: Created Employee Class
class Employee {
    constructor (name, id, department, salary) {
        this.name = name; // Assigns name property
        this.id = id; // Assigns ID property
        this.department = department; // Assigns department property
        this.salary = salary; // Assigns salary property
    }; 
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`; // Returns employee details
    }; // Creates method that returns employee details
    calculateAnnualSalary () {
        return this.salary * 12; // Calculates annual salary by multiplying salary by 12
    }; // Creates method that returns annual salary
}; // Declares Employee class with attributes
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // Creates new employee object
console.log(emp1.getDetails()); // Produces expected output of "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); // Produces expected output of 60000