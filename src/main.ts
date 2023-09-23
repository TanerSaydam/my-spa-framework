import { AppComponent } from "./components/app.component";
import { Router } from "./utils/router";
import { setRouteEvent } from "./utils/set-route";

window.addEventListener("load",()=> {
    Router.navigate(AppComponent);

    setRouteEvent();    
});