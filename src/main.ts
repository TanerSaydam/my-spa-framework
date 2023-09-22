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

//App Cpomponent
@Component({
    template: `
    <h1>App Component</h1>
    <button route="home">Home Component</button>
    <button route="app">App Component</button>
    <button route="about">About Component</button>
    `
})
class AppComponent{

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
    <button route="home">Home Component</button>
    <button route="app">App Component</button>
    <button route="about">About Component</button>
    `
})
class AboutComponent{    
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