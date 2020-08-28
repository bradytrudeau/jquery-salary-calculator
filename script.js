$(document).ready(onReady);

function addEmployee() {
  console.log("in addEmployee");
  const newEmployee = {
    firstName: "First Name",
    lastName: "Last Name",
    id: "ID",
    title: "Title",
    annualSalary: "Annual Salary",
  };
}

function onReady() {
  console.log("Ready To Go!");
  // capture click event with addEmployeeButton
  $("#addEmployeeButton").on("click", addEmployee);
}
