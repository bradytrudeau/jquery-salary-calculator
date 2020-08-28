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
    delete: null,
  };
  //Push newEmployee parameters into table
  console.log("New Employee:", newEmployee);
  employeeArray.push(newEmployee);
  console.log("Employee List:", employeeArray);
}

function onReady() {
  console.log("Ready To Go!");
  // capture click event with addEmployeeButton
  $("#addEmployeeButton").on("click", addEmployee);
}
