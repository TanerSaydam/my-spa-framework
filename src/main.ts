interface ComponentOptions{
    template?: string;
    templateUrl?: string;
}

function Component(options: ComponentOptions){
    return function(constructor: any){
        constructor.prototype.template = options.template;
        constructor.prototype.templateUrl = options.templateUrl;
    }
}

class Router{
    static async navigate(component: any){
        const appRoot = document.getElementById("root");
        if(appRoot){
            let template = new component().template;
            if(new component().templateUrl){
                template = await fetchTemplate(new component().templateUrl);
            }
            
            appRoot.innerHTML = template;
            new component();
            setRouteEvent();
        }
    }

    static route(path: string){
        console.log(path);
        if(path === "home"){
            return HomeComponent;
        }else if(path === "app"){
            return AppComponent
        }else if(path === "about"){
            return AboutComponent
        }

        return AppComponent;
    }
}

class ComponentBase{
    constructor() {
        setTimeout(()=> this.scanDOMForNgModels(),0);
        setTimeout(()=> this.scanDOMForOnClick(),0);
    }

    scanDOMForNgModels(){
        const elements = document.querySelectorAll("[ngModel]");
        for(const el of elements){
            const bindingValue = el.getAttribute("ngModel");
            if(bindingValue){
                let componentInstance:any = this;
                while(componentInstance && !Object.prototype.hasOwnProperty.call(componentInstance, bindingValue)){
                    componentInstance = Object.getPrototypeOf(componentInstance);
                }

                if(componentInstance){
                    el.addEventListener("keyup", e=> {
                        componentInstance[bindingValue] = (e.target as HTMLInputElement).value;
                    })
                }
            }
        }
    }

    scanDOMForOnClick(){
        const buttons = document.querySelectorAll("[onclick]");
        for(const el of buttons){
            const methodName = el.getAttribute("onclick");
            if(methodName){
                el.addEventListener("click", ()=> {
                    if(typeof this[methodName] === "function"){
                        this[methodName]();
                    }
                })
            }
        }
    }

}

//App Cpomponent
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
class AppComponent extends ComponentBase{
work: string = "";

showWork(){
    console.log(this.work);
}
}

//Home Component
@Component({
    templateUrl: `/public/home.component.html`
})
class HomeComponent{
    name: string = "Taner";

    method(){

    }
}



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
class AboutComponent extends ComponentBase{  
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

function setRouteEvent(){
    const routeElements = document.querySelectorAll("[route]");
    for(let el of routeElements){
        el.addEventListener("click", (e)=> {
            const route = (e.currentTarget as HTMLElement).getAttribute("route");
            if(route){
                const component = Router.route(route);
                Router.navigate(component);
            }
        });
    }
}

async function fetchTemplate(url: string): Promise<string>{
    const response = await fetch(url);
    const text = await response.text();
    return text;
}

window.addEventListener("load",()=> {
    Router.navigate(AppComponent);

    setRouteEvent();    
});