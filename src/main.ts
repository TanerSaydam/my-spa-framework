interface ComponentOptions{
    template: string;
}

function Component(options: ComponentOptions){
    return function(constructor: any){
        constructor.prototype.template = options.template;
    }
}

class Router{
    static navigate(component: any){
        const appRoot = document.getElementById("root");
        if(appRoot){
            appRoot.innerHTML = new component().template;
        }
    }
}

@Component({
    template: `
    <h1>App Component</h1>
    <button onclick="navigateToHome()">Go to Home Component</button>
    `
})
class AppComponent{

}

@Component({
    template: `
    <h1>Merhaba {{name}}</h1>
    <button onclick="navigateToApp()">Go to App Component</button>
    `
})
class HomeComponent{
    name: string = "Taner";

    method(){

    }
}

function navigateToHome(){
    Router.navigate(HomeComponent);
}

function navigateToApp(){
    Router.navigate(AppComponent);
}

window.addEventListener("load",()=> {
    Router.navigate(AppComponent);
});