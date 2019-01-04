// json-server -p 8088 -w smallBusiness.json

const employeeCard = document.createElement("article");
employeeCard.setAttribute("class", "employee");

// const employeeHeader = document.createElement("header");
// employeeHeader.setAttribute("class", "employee__name");

// const employeeDepartmentSection = document.createElement("section");
// employeeDepartmentSection.setAttribute("class", "employee__department");

// const employeeComputerSection = document.createElement("section");
// employeeComputerSection.setAttribute("class", "employee__computer");

// employeeCard.appendChild(employeeHeader);
// employeeCard.appendChild(employeeDepartmentSection);
// employeeCard.appendChild(employeeComputerSection);
// cardDiv = document.querySelector("#cardDiv");
// cardDiv.appendChild(employeeCard);

// code from Russ - other alternative is to do 3 seperate fetch calls
fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
.then(response => response.json())
.then(cardList => {
    
    console.table(cardList)
    cardList.forEach(card => {
        cardDiv.innerHTML += `        
        <header class="employee__name">
        <h3>${card.employeeName}</h3>
        </header>
        <section class="employee__department">
        Works in the ${card.department.departmentName} department
        </section>
        <section class="employee__computer">
        Currently using a ${card.computer.computerType}
        </section>
        `
      });
    
})