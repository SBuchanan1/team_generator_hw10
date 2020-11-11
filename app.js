const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// lists the employees
const employeeList = [];
const idArray = [];

function appMenu() {

    function createManager() {
        console.log("Please build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your manager's id?",
                validate: answer => {
                    const pass = answer.match(
                        // /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email?",
                validate: answer => {
                    const pass = answer.match(
                        // /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your manager's office number?",
                validate: answer => {
                    const pass = answer.match(
                        // /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            employeeList.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
    }

    function createTeam() {

        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's id?",
                validate: answer => {
                    const pass = answer.match(
                        // /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "Oops! This ID is already taken. Please enter a different number.";
                        } else {
                            return true;
                        }

                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
                validate: answer => {
                    const pass = answer.match(
                        // /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's GitHub username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            employeeList.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's id?",
                validate: answer => {
                    const pass = answer.match(
                        // /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "This ID is already taken. Please enter a different number.";
                        } else {
                            return true;
                        }

                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?",
                validate: answer => {
                    const pass = answer.match(
                        // /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            employeeList.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });
    }

    function buildTeam() {
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

    createManager();

}


appMenu();



// function specialPrompt() {
//     inquirer.prompt([
//         {
//             name: "employeeName",
//             type: "input",
//             message: "Please enter employee name",
//         },

//         {
//             name: "employeeId",
//             type: "input",
//             message: "Please enter employee Id: ",
//         },
//         {
//             name: "employeeEmail",
//             type: "input",
//             message: "Please enter your employee email address: ",

//         },
//         {
//             name: "employeeRole",
//             type: "list",
//             message: "Please select employee role: ",
//             choices: ["Manager", "Engineer", "Intern"

//             ]
//         }.then(function (response) {
//             specialPrompt(response);
//         }).catch(function (response) {
//             if (err) throw err
//         })



// console.log("initial prompt answers");


// The above curly brace marks the end of the prompt

// Prompt based on users response
// function specialPrompt(userResponse) {
//     if (userResponse.employeeRole === "Manager") {
//         inquirer.prompt(
//             [
//                 {
//                     name: "officeNumber",
//                     type: "input",
//                     message: "Please enter office number: ",
//                 }
//             ]).then(function (specialResponse) {
//                 const manager = new Manager(userResponse.employeeName, userResponse.employeeId, userResponse.employeeEmail, specialResponse.officeNumber);
//                 employeeArray.push.(manager);
//                 stopPrompt();
//             }).catch(function (err) {
//                 if (err) throw err
//             })
//     } else if (userResponse.employeeRole === "Engineer") {
//         inquirer.prompt([
//             {
//                 name: "github",
//                 type: "input",
//                 message: "Please enter your Github username: "
//             }
//         ]).then(function (specialResponse) {
//             const engineer = new Engineer(userResponse.employeeName, userResponse.employeeId, userResponse.employeeEmail, specialResponse.github)
//             employeeArray.push(engineer);
//             stopPrompt();
//         }).catch(function (err) {
//             if (err) throw err
//         })
//     } else {
//         inquirer.prompt(
//             [
//                 {
//                     name: "school",
//                     type: "input",
//                     message: "Where did the employee attend school?"
//                 }
//             ]
//         ).then(function (specialResponse) {
//             const intern = new Intern(userResponse.employeeName, userResponse.employeeId, userResponse.employeeEmail, specialResponse.github)
//             employeeArray.push(Intern);
//             stopPrompt();
//         });
//     }


// }

// // Function asking to user if they would like to stop creating employees

// function stopPrompt() {
//     inquirer.prompt
//     [
//         {
//             name: "stop",
//             type: "confirm",
//             message: "Would you like to stop adding employees?"
//         }
//     ].then(function (res) {
//         if (res.stop) {
//             const currentEmployeeData = render(employeeArray);
//             fs.writeFile(outputPath, currentEmployeeData, function (err) {
//                 if (err) throw err;
//             })
//         } else {
//             promptCommon();
//         }
//     })
// }




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
