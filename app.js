'use strict';

function Employee(employeeID, fullName, department, level, imageURL) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
}

Employee.prototype.generateEmployeeID = function () {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Employee.prototype.calculateSalary = function () {
  const levelTable = {
    Senior: { min: 1500, max: 2000 },
    'Mid-Senior': { min: 1000, max: 1500 },
    Junior: { min: 500, max: 1000 },
  };

  const { min, max } = levelTable[this.level];
  const salary = Math.floor(Math.random() * (max - min + 1) + min);
  const netSalary = salary - salary * 0.075; 

  return { salary, netSalary };
};

Employee.prototype.render = function () {
  const { salary } = this.calculateSalary();

  document.write(`<p>Employee name: ${this.fullName}</p>`);
  document.write(`<p>Department: ${this.department}</p>`);
  document.write(`<p>Employee salary: ${salary}</p>`);
  document.write('<hr>');
};

const employee1 = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', 'b.jpg');
const employee2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior', 'g.jpg');
const employee3 = new Employee(1002, 'Tamara Ayoub', 'Administration', 'Senior', 'gg.jpg');
const employee4 = new Employee(1003, 'Safi Walid', 'Development', 'Mid-Senior', 'bbb.webp');
const employee5 = new Employee(1004, 'Rana Saleh', 'Development', 'Junior', 'bbbbbb.jpg');
const employee6 = new Employee(1005, 'Hadi Ahmad', 'Finance', 'Mid-Senior', '');

employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
