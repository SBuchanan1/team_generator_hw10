// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// const Intern = require(".lib/Intern")
class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
        return this.github
    }



    getRole() {
        return "Intern";
    }
}
module.exports = Intern;