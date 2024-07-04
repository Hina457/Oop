#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
const programstart = async (persons) => {
    console.log(chalk.bgGreenBright("Wellcome to Hina Alvi Oop Project!"));
    do {
        const ans = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["Staff", "student", "Exit"]
        });
        if (ans.Select == "Staff") {
            console.log("You approach the staff room.please feel free to ask any Question.");
        }
        else if (ans.Select == "student") {
            const ans = await inquirer.prompt({
                name: "Student",
                type: "input",
                message: "Enter the student's name you wish to engage with:",
            });
            const Student = persons.students.find(val => val.name == ans.Student);
            if (!Student) {
                const name = new student(ans.Student);
                persons.addStudent(name);
                console.log(chalk.green(`Hello i am ${name.name}.Nice to meet you!`));
                console.log(chalk.red("New Student added"));
                console.log(chalk.yellow("Current Student list"));
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${Student.name}.Nice to see you again!`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if (ans.Select === "Exit") {
            console.log("Exiting the program...");
            process.exit();
        }
    } while (true);
};
programstart(persons);
