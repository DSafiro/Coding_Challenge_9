// Task 1: Created Employee Class
class Employee {
    constructor (name, id, department, salary) {
        this.name = name; // Assigns name property
        this.id = id; // Assigns ID property
        this.department = department; // Assigns department property
        this.salary = salary; // Assigns salary property
    }; // Creates constructor for Employee class
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

// Task 2: Created Manager Class with Inheritance
class Manager extends Employee {
    constructor (name, id, department, salary, teamSize) {
        super(name, id, department, salary); // Calls previous constructor from Employee class
        this.teamSize = teamSize; // Assigns team size property
    }; // Creates constructor for Manager class
    getDetails() {
       return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`; // Returns manager details with updated team size
    }; // Updated getDetails method
    calculateBonus () {
        return super.calculateAnnualSalary() * 0.10; // Calculates bonus by calling calculateAnnualSalary and multiplying by 0.10
    }; // Creates method that returns calculated bonus
};  // Declares Manager class with attributes
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // Creates new manager object
console.log(mgr1.getDetails());// Produces expected output of "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus());  // Produces expected output of 9600

// Task 3: Created Company Class
class Company {
    constructor (name, employees) {
        this.name = name; // Assigns name property
        this.employees = []; // Assigns employees as array
    } // Creates constructor for company
    addEmployee(employee) { 
        return this.employees.push(employee); // Adds new employees to array
    }; // Creates a method to add employees
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails())); // Outputs list of employees
    }; // Creates a method that lists employee
}; // Declares Company class with attributes
const company = new Company("TechCorp"); // Creates new company
company.addEmployee(emp1); // Adds employee to company
company.addEmployee(mgr1); // Adds manager to company
company.listEmployees(); // Produces expected output of  "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000" and "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"