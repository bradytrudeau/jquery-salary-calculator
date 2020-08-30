$(document).ready(onReady);

let employeeArray = [];
const maxMonthlySalary = 20000;

function addEmployee() {
  console.log("in addEmployee");
  //Create newEmployee based on values from inputs
  const newEmployee = {
    firstName: $("#firstNameIn").val(),
    lastName: $("#lastNameIn").val(),
    id: $("#idIn").val(),
    title: $("#titleIn").val(),
    annualSalary: $("#annualSalaryIn").val(),
  };
  //Push newEmployee parameters into table
  console.log("New Employee:", newEmployee);
  employeeArray.push(newEmployee);
  console.log("Employee List:", employeeArray);
  //Display employees in table
  displayEmployees();
}

function checkMonthlyTotal() {
  let el = Number($("#totalMonthly").text());
  if (el >= maxMonthlySalary) {
    $("#totalMonthly").css("background-color", "red");
  } else {
    console.log("You have not reached the total monthly salary limit!");
  }
}

function displayEmployees() {
  console.log("In displayEmployees");
  let el = $(".employeeTable");
  el.empty();
  //Loop through employeeArray
  for (let i = 0; i < employeeArray.length; i++) {
    el.append(
      `<tr><td>${employeeArray[i].firstName}</td>
      <td>${employeeArray[i].lastName}</td>
      <td>${employeeArray[i].id}</td>
      <td>${employeeArray[i].title}</td>
      <td>$${employeeArray[i].annualSalary}</td>
      <td><button class="removeBtn">Delete</button></td></tr>`
    );
  }
  totalMonthlySalary();
}

function onReady() {
  console.log("Ready To Go!");
  // capture click event with addEmployeeButton
  $("#addEmployeeButton").on("click", addEmployee);
  $(document).on("click", ".removeBtn", onRemove);
}

function onRemove() {
  $(this).parents("tr").remove();
}

function totalMonthlySalary() {
  let totalSalary = 0;
  for (let i = 0; i < employeeArray.length; i++) {
    totalSalary += Number(employeeArray[i].annualSalary) / 12;
  }
  let el = $("#totalMonthly");
  el.empty();
  el.append(totalSalary);
  checkMonthlyTotal();
}
