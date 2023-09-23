import { Router } from "./router";

export function setRouteEvent(){
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