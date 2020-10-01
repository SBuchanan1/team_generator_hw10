// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Manager = require("./Manager")
class Manager extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
    //     this.github = github;
    // }
    // getGithub() {
    //     return this.github
    // }



    getRole() {
        return "manager";
    }
}
module.exports = Manager;