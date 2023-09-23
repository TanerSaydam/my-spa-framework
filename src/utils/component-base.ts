export class ComponentBase{
    [key:string]: any;
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