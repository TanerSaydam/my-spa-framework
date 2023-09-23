import { ComponentBase } from "../utils/component-base";
import { Component } from "../utils/decarators";

@Component({
    template: `
    <h1>App Component</h1>    
    <button route="app">App Component</button>
    `
})
export class AppComponent{}