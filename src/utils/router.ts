import { staticRoute } from "../staticRoute";
import { fetchTemplate } from "./fetch-template";
import { setRouteEvent } from "./set-route";

export class Router{
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
        return staticRoute(path);
    }
}