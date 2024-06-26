// Write your solution in this file!
// Initial Employee object
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};

// Function to update an employee with a key and value (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object with the original employee's properties plus the new key-value pair
    return { ...employee, [key]: value };
}

// Function to update an employee with a key and value (destructive)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Directly add/update the key-value pair on the employee object
    employee[key] = value;
    return employee;
}

// Function to delete a key from an employee (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    // Create a copy of the employee object
    let newEmployee = { ...employee };
    // Delete the key from the new object
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete a key from an employee (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Directly delete the key from the original employee object
    delete employee[key];
    return employee;
}
