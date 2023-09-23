import { ComponentBase } from "../utils/component-base";
import { Component } from "../utils/decarators";

@Component({
    template: `
    <h1>About Component</h1>
    <input>
    <button id="show">Show Input Value</button>
    <button route="app">App Component</button>
    <button route="home">Home Component</button>
    <button route="about">About Component</button>
    <button route="new">New Component</button>
    `
})
export class AboutComponent{  
    name: string = "";

    showName(){
        console.log(this.name);
    }

    constructor(){
        this.setupBindings();
    }


    setupBindings(){
        const inputEl = document.querySelector("input");
        if(inputEl){
            inputEl.addEventListener("keyup", (e)=> {
                this.name = (e.target as HTMLInputElement).value;
            })
        }

        const buttonEl = document.getElementById("show");        
        if(buttonEl){            
            buttonEl.addEventListener("click", ()=> {                
                this.showName();
            })
        }
    }

    
}