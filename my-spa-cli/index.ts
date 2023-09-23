#!/usr/bin/env node
import yargs from "yargs";
import fs from 'fs';
import {exec} from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const argv = yargs
.command("start","Run project localhost:8080")
.command("build", "Build project for ISS")
.command("new", "Create a new project", {
    "name": {
        describe: "Project name",
        demandOption: true,
        type: 'string',
        alias: 'n'
    }
})
.command({
    command: "component",
    describe: "Create a new component",
    aliases: ["c"],
    builder: {
        "name": {
            describe: "Component name",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        const componentName = argv.name as string;
        createComponent(componentName);
    }
})
.help()
.argv as { [key: string]: unknown, _: string[]};


if(argv._.includes("start")){
    exec(`npm start`, (err, stdout, stderr)=> {
        if(err){
            console.error(`Error: ${stdout}`);
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    })
}

if(argv._.includes("build")){
    exec(`npm run build`, (err, stdout, stderr)=> {
        if(err){
            console.error(`Error: ${stdout}`);
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    })
}

if(argv._.includes("new")){
    let projectName = argv.name as string;
    if(!projectName){
        rl.question("Please enter a project name:", (inputName: string)=> {
            projectName = inputName;
            rl.close(),
            createNewProject(projectName);
        })
    }else{
        createNewProject(projectName);
    }
}

function createNewProject(projectName:string){    
    if(!fs.existsSync(projectName)){
        console.log("Creating directory...");
        fs.mkdirSync(projectName);
    }

    console.log("Cloning GitHub repository...");

    exec(`git clone https://github.com/TanerSaydam/my-spa-framework.git ${projectName}`,(error, stdout, stderr)=> {
        if(error){
            console.error(`Error: ${stdout}`);
            return;
        }

        console.log("Repository cloned successfully.");

        console.log("Installing npm packages...");

        exec(`cd ${projectName} && npm install`, (error, stdout, stderr)=> {
            if(error){
                console.error(`Error: ${stdout}`);
                return;
            }

            console.log("\x1b[32m", "Npm packages installed succesfully.");

            console.log("\nAll set! To run the application, navigate to project directory and execute the following commands:\n");
            console.log("\x1b[33m",`cd ${projectName}`);
            console.log("\x1b[32m",`ts start`);
            console.log("\x1b[0m","")
        })
    })
}


function createComponent(componentName: string){
    if(!componentName) componentName = "new";
    console.log("Creating component...");
    const content =  `import { ComponentBase } from "../utils/component-base";
    import { Component } from "../utils/decarators";

    @Component({
        templateUrl: "./${componentName}.component.html"
    })
    export class ${capitalizeFirstLetter(componentName)}Component {}
    `

    if(!fs.existsSync(`./src/components/${componentName}.component.ts`)){        
        fs.writeFileSync(`./src/components/${componentName}.component.ts`,content);
    }

    if(!fs.existsSync(`./public/${componentName}.component.html`)){        
        fs.writeFileSync(`./public/${componentName}.component.html`,`<h1>${componentName} Component</h1>`);
    }

    console.log("\x1b[32m","Component create is successfull.");
    console.log("\x1b[32m",`./src/components/${componentName}.component.ts`);
    console.log("\x1b[32m",`./public/${componentName}.component.html`);
    console.log("\x1b[0m","");    
}

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


