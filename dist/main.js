"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(options) {
    return function (constructor) {
        constructor.prototype.template = options.template;
    };
}
class Router {
    static navigate(component) {
        const appRoot = document.getElementById("root");
        if (appRoot) {
            appRoot.innerHTML = new component().template;
        }
    }
}
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Component({
        template: `
    <h1>App Component</h1>
    <button onclick="navigateToHome()">Go to Home Component</button>
    `
    })
], AppComponent);
let HomeComponent = class HomeComponent {
    constructor() {
        this.name = "Taner";
    }
    method() {
    }
};
HomeComponent = __decorate([
    Component({
        template: `
    <h1>Merhaba {{name}}</h1>
    <button onclick="navigateToApp()">Go to App Component</button>
    `
    })
], HomeComponent);
function navigateToHome() {
    Router.navigate(HomeComponent);
}
function navigateToApp() {
    Router.navigate(AppComponent);
}
window.addEventListener("load", () => {
    Router.navigate(AppComponent);
});
