let employee = {
    name : "Sam",
    streetAddress : "00200 NBO"
}

//NO.1 

 function updateEmployeeWithKeyAndValue ( employee, key, value){
    return {
        ...employee,
        [key]: value
      };
 }
 const newEmployee = updateEmployeeWithKeyAndValue ( employee, "location", "Nakuru" );
 console.log ( newEmployee );

//NO.2

 function destructivelyUpdateEmployeeWithKeyAndValue ( employee, key, value ){
    employee [key] = value;
    return employee;
 }
 const newEmployee1 = destructivelyUpdateEmployeeWithKeyAndValue ( "Alton", "phone", "7178090" )
 console.log ( newEmployee1 );
 
 //NO.3

 function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedKey, ...newEmployee2 } = employee;
    return newEmployee2;
    // let newEmployee2 = { ...employee };
    // delete newEmployee2.key;
  }

//NO.4

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete( employee.key);
    return employee;
}
console.log ( employee );

