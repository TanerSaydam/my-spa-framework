import { AppComponent } from "./components/app.component";


export function staticRoute(path: string){
    if(path === "app"){
        return AppComponent
    }

    return AppComponent;
}