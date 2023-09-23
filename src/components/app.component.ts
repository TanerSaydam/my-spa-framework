import { ComponentBase } from "../utils/component-base";
import { Component } from "../utils/decarators";

@Component({
    template: `
    <h1>App Component</h1>
    <input ngModel="work">
    <button onclick="showWork">Show work</button>
    <button route="home">Home Component</button>
    <button route="app">App Component</button>
    <button route="about">About Component</button>
    `
})
export class AppComponent extends ComponentBase{
work: string = "";

showWork(){
    console.log(this.work);
}
}