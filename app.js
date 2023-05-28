'use strict';

function Employee(fullName, department, level, imageURL) {
  this.employeeID = generateEmployeeID();
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = calculateSalary(level);
}

Employee.prototype.render = function () {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = this.imageURL;
  card.appendChild(image);

  const name = document.createElement("p");
  name.textContent = `Employee name: ${this.fullName}`;
  card.appendChild(name);

  const dept = document.createElement("p");
  dept.textContent = `Department: ${this.department}`;
  card.appendChild(dept);

  const salary = document.createElement("p");
  salary.textContent = `Employee salary: ${this.salary}`;
  card.appendChild(salary);

  document.getElementById("employees-container").appendChild(card);
};

const employees = [
  new Employee("Ghazi Samer", "Administration", "Senior", "OIP (2).jpg"),
  new Employee("Lana Ali", "Finance", "Senior", "662373.png"),
  new Employee("Tamara Ayoub", "Administration", "Senior", "662373.png"),
  new Employee("Safi Walid", "Development", "Mid-Senior", "OIP (1).jpg"),
  new Employee("Rana Saleh", "Development", "Junior", "662373.png"),
  new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "OIP (1).jpg"),
];

function generateEmployeeID() {
  return Math.floor(1000 + Math.random() * 9000);
}

function calculateSalary(level) {
  let min, max;
  switch (level) {
    case "Senior":
      min = 1500;
      max = 2000;
      break;
    case "Mid-Senior":
      min = 1000;
      max = 1500;
      break;
    case "Junior":
      min = 500;
      max = 1000;
      break;
    default:
      min = 0;
      max = 0;
  }
  const salary = Math.floor(min + Math.random() * (max - min + 1));
  const netSalary = salary - salary * 0.075; 
  return netSalary.toFixed(2);
}

employees.forEach((employee) => {
  employee.render();
});

