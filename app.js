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

//Function which prompts user for common information name, id, information and their role

// promptCommon();
function init() {
    inquirer.prompt([
        {
            name: "employeeName",
            type: "input",
            message: "Please enter employee name",
        },
        {
            name: "employeeId",
            type: "input",
            message: "Please enter employee Id: ",
        },
        {
            name: "employeeEmail",
            type: "input",
            message: "Please enter your employee email address: ",

        },
        {
            name: "employeeRole",
            type: "list",
            message: "Please select employee role: ",
            choices: ["Manager", "Engineer", "Intern"

            ]
        }.then(function (response) {
            specialPrompt(response);
        }).catch(function (response) {
            if (err) throw err
        })

// console.log("initial prompt answers");


    // The above curly brace marks the end of the prompt

    // Prompt based on users response
    function specialPrompt(userResponse) {
            if (userResponse.employeeRole === "Manager") {
                inquirer.prompt {
                    [
                        {
                            name: "officeNumber",
                            type: "input",
                            message: "Please enter office number: ",
                        }
                    ]).then(function (specialResponse) {
                        const manager = new Manager(userResponse.employeeName, userResponse.employeeId, userResponse.employeeEmail, specialResponse.officeNumber);
                        employeeArray.push.(manager);
                        stopPrompt();
                    }).catch(function (err) {
                        if (err) throw err
                    })
}else if (userResponse.employeeRole === "Engineer") {
    inquirer.prompt {
        [
            {
                name: "github",
                type: "input",
                message: "Please enter your Github username: "
            }
        ]).then(function (specialResponse) {
            const engineer = new Engineer(userResponse.employeeName, userResponse.employeeId, userResponse.employeeEmail, specialResponse.github)
            employeeArray.push(engineer);
            stopPrompt();
        }).catch(function (err) {
            if (err) throw err
        })
    } else {
        inquirer.prompt {
            [
                {
                    name: "school",
                    type: "input",
                    message: "Where did the employee attend school?"
                }
            ]
        }.then(function (specialResponse) {
            const intern = new Intern(userResponse.employeeName, userResponse.employeeId, userResponse.employeeEmail, specialResponse.github)
            employeeArray.push(Intern);
            stopPrompt();
        })
    }


}
        }
// Function asking to user if they would like to stop creating employees

function stopPrompt() {
    inquirer.prompt {
        [
            {
                name: "stop",
                type: "confirm",
                message: "Would you like to stop adding employees?"
            }
        ]
    }.then(function (res) {
        if (res.stop) {
            const currentEmployeeData = render(employeeArray);
            fs.writeFile(outputPath, currentEmployeeData, function (err) {
                if (err) throw err;
            })
        } else {
            promptCommon();
        }
    }
    }



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
// for the provided `render` function to work! ```

// function getTeamMembers() {
//     inquirer.prompt
// }
// getTeamMembers()