import { Component } from "../utils/decarators";

@Component({
    template: `
        <h1>New Component</h1>
        <button route="app">App Component</button>
        <button route="home">Home Component</button>
        <button route="about">About Component</button>
        <button route="new">New Component</button>`
})
export class NewComponent{

}