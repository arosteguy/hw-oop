// The Manager class `extends` from Employee, and should have these additional properties/behaviors:

// officeNumber
// getRole() (Overridden to return 'Manager')
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum){

        super(name, id, email);

        this.officeNum = officeNum;
        
    }
    getOfficeNumber(){
        return this.officeNum;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;
