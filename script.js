$(document).ready(onReady);

let employeeArray = [];

function addEmployee() {
  console.log("in addEmployee");
  //Create newEmployee based on values from inputs
  const newEmployee = {
    firstName: $("#firstNameIn").val(),
    lastName: $("#lastNameIn").val(),
    id: $("#idIn").val(),
    title: $("#titleIn").val(),
    annualSalary: $("#annualSalaryIn").val(),
    delete: null, //need to add delete button here
  };
  //Push newEmployee parameters into table
  console.log("New Employee:", newEmployee);
  employeeArray.push(newEmployee);
  console.log("Employee List:", employeeArray);
  //Display employees in table
  displayEmployees();
}

function displayEmployees() {
  console.log("In displayEmployees");
  let el = $("#employeeTable");
  el.empty();
  //Loop through employeeArray
  for (let i = 0; i < employeeArray.length; i++) {
    el.append(
      `<td>${employeeArray[i].firstName}</td>`,
      `<td>${employeeArray[i].lastName}</td>`
    );
  }
}

function onReady() {
  console.log("Ready To Go!");
  // capture click event with addEmployeeButton
  $("#addEmployeeButton").on("click", addEmployee);
}
