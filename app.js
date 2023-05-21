'use strict';

const employees = [
    {
      id: generateEmployeeID(),
      fullName: 'Ghazi Samer',
      department: 'Administration',
      level: 'Senior',
      imageURL: 'b.jpg',
    },
    {
      id: generateEmployeeID(),
      fullName: 'Lana Ali',
      department: 'Finance',
      level: 'Senior',
      imageURL: 'g.jpg',
    },
    {
      id: generateEmployeeID(),
      fullName: 'Tamara Ayoub',
      department: 'Marketing',
      level: 'Senior',
      imageURL: 'gg.jpg',
    },
    {
      id: generateEmployeeID(),
      fullName: 'Safi Walid',
      department: 'Administration',
      level: 'Mid-Senior',
      imageURL: 'bb.webp',
    },
    {
      id: generateEmployeeID(),
      fullName: 'Omar Zaid',
      department: 'Development',
      level: 'Senior',
      imageURL: 'bbb.webp',
    },
    {
      id: generateEmployeeID(),
      fullName: 'Rana Saleh',
      department: 'Development',
      level: 'Junior',
      imageURL: '',
    },
    {
      id: generateEmployeeID(),
      fullName: 'Hadi Ahmad',
      department: 'Finance',
      level: 'Mid-Senior',
      imageURL: 'bbbbbb.jpg',
    },
  ];
  
  // Salary ranges
  const salaryRanges = {
    Senior: { min: 1500, max: 2000 },
    'Mid-Senior': { min: 1000, max: 1500 },
    Junior: { min: 500, max: 1000 },
  };
  
  function generateEmployeeID() {
    return Math.floor(1000 + Math.random() * 9000);
  }
  
  function calculateSalary(employee) {
    const { level } = employee;
    const { min, max } = salaryRanges[level];
    const salary = Math.floor(min + Math.random() * (max - min + 1));
    const taxRate = 7.5;
    const netSalary = salary - (salary * taxRate) / 100;
    return { salary, netSalary };
  }
  
  function renderEmployees() {
    const outputDiv = document.getElementById('employee-info');
  
    employees.forEach((employee) => {
      const { fullName } = employee;
      const { salary } = calculateSalary(employee);
  
      const employeeInfo = document.createElement('p');
      employeeInfo.textContent = `Employee name: ${fullName}\nEmployee salary: ${salary}`;
  
      outputDiv.appendChild(employeeInfo);
    });
  }
  
  renderEmployees();
  