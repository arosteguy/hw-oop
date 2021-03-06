// The Engineer class `extends` from Employee, and should have these additional properties/behaviors:

// github (GitHub username)
// getGithub()
// getRole() (Overridden to return 'Engineer')
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, githubUserName) {

        super(name, id, email);

        this.githubUserName = githubUserName;
        
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;