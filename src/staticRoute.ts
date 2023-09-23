import { AboutComponent } from "./components/about.component";
import { AppComponent } from "./components/app.component";
import { HomeComponent } from "./components/home.component";
import { NewComponent } from "./components/new.component";

export function staticRoute(path: string){
    if(path === "home"){
        return HomeComponent;
    }else if(path === "app"){
        return AppComponent
    }else if(path === "about"){
        return AboutComponent
    }else if(path == "new")
        return NewComponent

    return AppComponent;
}