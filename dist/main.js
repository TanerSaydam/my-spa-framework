var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function Component(options) {
    return function (constructor) {
        constructor.prototype.template = options.template;
        constructor.prototype.templateUrl = options.templateUrl;
    };
}
class Router {
    static navigate(component) {
        return __awaiter(this, void 0, void 0, function* () {
            const appRoot = document.getElementById("root");
            if (appRoot) {
                let template = new component().template;
                if (new component().templateUrl) {
                    template = yield fetchTemplate(new component().templateUrl);
                }
                appRoot.innerHTML = template;
                new component();
                setRouteEvent();
            }
        });
    }
    static route(path) {
        console.log(path);
        if (path === "home") {
            return HomeComponent;
        }
        else if (path === "app") {
            return AppComponent;
        }
        else if (path === "about") {
            return AboutComponent;
        }
        return AppComponent;
    }
}
class ComponentBase {
    constructor() {
        setTimeout(() => this.scanDOMForNgModels(), 0);
        setTimeout(() => this.scanDOMForOnClick(), 0);
    }
    scanDOMForNgModels() {
        const elements = document.querySelectorAll("[ngModel]");
        for (const el of elements) {
            const bindingValue = el.getAttribute("ngModel");
            if (bindingValue) {
                let componentInstance = this;
                while (componentInstance && !Object.prototype.hasOwnProperty.call(componentInstance, bindingValue)) {
                    componentInstance = Object.getPrototypeOf(componentInstance);
                }
                if (componentInstance) {
                    el.addEventListener("keyup", e => {
                        componentInstance[bindingValue] = e.target.value;
                    });
                }
            }
        }
    }
    scanDOMForOnClick() {
        const buttons = document.querySelectorAll("[onclick]");
        for (const el of buttons) {
            const methodName = el.getAttribute("onclick");
            if (methodName) {
                el.addEventListener("click", () => {
                    if (typeof this[methodName] === "function") {
                        this[methodName]();
                    }
                });
            }
        }
    }
}
//App Cpomponent
let AppComponent = class AppComponent extends ComponentBase {
    constructor() {
        super(...arguments);
        this.work = "";
    }
    showWork() {
        console.log(this.work);
    }
};
AppComponent = __decorate([
    Component({
        template: `
    <h1>App Component</h1>
    <input ngModel="work">
    <button onclick="showWork">Show work</button>
    <button route="home">Home Component</button>
    <button route="app">App Component</button>
    <button route="about">About Component</button>
    `
    })
], AppComponent);
//Home Component
let HomeComponent = class HomeComponent {
    constructor() {
        this.name = "Taner";
    }
    method() {
    }
};
HomeComponent = __decorate([
    Component({
        templateUrl: `/public/home.component.html`
    })
], HomeComponent);
let AboutComponent = class AboutComponent extends ComponentBase {
    constructor() {
        super(...arguments);
        this.name = "";
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
    showName() {
        console.log(this.name);
    }
};
AboutComponent = __decorate([
    Component({
        template: `
    <h1>About Component</h1>
    <input ngModel="name">
    <button id="show" onclick="showName">Show Input Value</button>
    <button route="home">Home Component</button>
    <button route="app">App Component</button>
    <button route="about">About Component</button>
    `
    })
], AboutComponent);
function setRouteEvent() {
    const routeElements = document.querySelectorAll("[route]");
    for (let el of routeElements) {
        el.addEventListener("click", (e) => {
            const route = e.currentTarget.getAttribute("route");
            if (route) {
                const component = Router.route(route);
                Router.navigate(component);
            }
        });
    }
}
function fetchTemplate(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const text = yield response.text();
        return text;
    });
}
window.addEventListener("load", () => {
    Router.navigate(AppComponent);
    setRouteEvent();
});
