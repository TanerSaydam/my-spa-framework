import { ComponentBase } from "../utils/component-base";
import { Component } from "../utils/decarators";

@Component({
    template: `
    <h1>About Component</h1>
    <input ngModel="name">
    <button id="show" onclick="showName">Show Input Value</button>
    <button route="home">Home Component</button>
    <button route="app">App Component</button>
    <button route="about">About Component</button>
    `
})
export class AboutComponent extends ComponentBase{  
    name: string = "";

    showName(){
        console.log(this.name);
    }

    // constructor(){
    //     //this.setupBindings();
    // }


    // setupBindings(){
    //     const inputEl = document.querySelector("input");
    //     if(inputEl){
    //         inputEl.addEventListener("keyup", (e)=> {
    //             this.name = (e.target as HTMLInputElement).value;
    //         })
    //     }

    //     const buttonEl = document.getElementById("show");        
    //     if(buttonEl){            
    //         buttonEl.addEventListener("click", ()=> {                
    //             this.showName();
    //         })
    //     }
    // }

    
}