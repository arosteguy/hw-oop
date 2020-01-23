// (this class will be the basis for other three classes; they will `extend` from it)
// The Employee class will have the following properties and methods:

// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
        
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;