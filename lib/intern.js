// The Intern class `extends` from Employee, and should have these additional properties/behaviors:

// school
// getSchool()
// getRole() (Overridden to return 'Intern')
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, title, email, school){

        super(name, id, title, email);

        this.school = school;
        
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;