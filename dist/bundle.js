/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/about.component.ts":
/*!*******************************************!*\
  !*** ./src/components/about.component.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AboutComponent = void 0;\nconst component_base_1 = __webpack_require__(/*! ../utils/component-base */ \"./src/utils/component-base.ts\");\nconst decarators_1 = __webpack_require__(/*! ../utils/decarators */ \"./src/utils/decarators.ts\");\nlet AboutComponent = class AboutComponent extends component_base_1.ComponentBase {\n    constructor() {\n        super(...arguments);\n        this.name = \"\";\n        // constructor(){\n        //     //this.setupBindings();\n        // }\n        // setupBindings(){\n        //     const inputEl = document.querySelector(\"input\");\n        //     if(inputEl){\n        //         inputEl.addEventListener(\"keyup\", (e)=> {\n        //             this.name = (e.target as HTMLInputElement).value;\n        //         })\n        //     }\n        //     const buttonEl = document.getElementById(\"show\");        \n        //     if(buttonEl){            \n        //         buttonEl.addEventListener(\"click\", ()=> {                \n        //             this.showName();\n        //         })\n        //     }\n        // }\n    }\n    showName() {\n        console.log(this.name);\n    }\n};\nexports.AboutComponent = AboutComponent;\nexports.AboutComponent = AboutComponent = __decorate([\n    (0, decarators_1.Component)({\n        template: `\r\n    <h1>About Component</h1>\r\n    <input ngModel=\"name\">\r\n    <button id=\"show\" onclick=\"showName\">Show Input Value</button>\r\n    <button route=\"home\">Home Component</button>\r\n    <button route=\"app\">App Component</button>\r\n    <button route=\"about\">About Component</button>\r\n    `\n    })\n], AboutComponent);\n\n\n//# sourceURL=webpack://my-spa-framework/./src/components/about.component.ts?");

/***/ }),

/***/ "./src/components/app.component.ts":
/*!*****************************************!*\
  !*** ./src/components/app.component.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppComponent = void 0;\nconst component_base_1 = __webpack_require__(/*! ../utils/component-base */ \"./src/utils/component-base.ts\");\nconst decarators_1 = __webpack_require__(/*! ../utils/decarators */ \"./src/utils/decarators.ts\");\nlet AppComponent = class AppComponent extends component_base_1.ComponentBase {\n    constructor() {\n        super(...arguments);\n        this.work = \"\";\n    }\n    showWork() {\n        console.log(this.work);\n    }\n};\nexports.AppComponent = AppComponent;\nexports.AppComponent = AppComponent = __decorate([\n    (0, decarators_1.Component)({\n        template: `\r\n    <h1>App Component</h1>\r\n    <input ngModel=\"work\">\r\n    <button onclick=\"showWork\">Show work</button>\r\n    <button route=\"home\">Home Component</button>\r\n    <button route=\"app\">App Component</button>\r\n    <button route=\"about\">About Component</button>\r\n    `\n    })\n], AppComponent);\n\n\n//# sourceURL=webpack://my-spa-framework/./src/components/app.component.ts?");

/***/ }),

/***/ "./src/components/home.component.ts":
/*!******************************************!*\
  !*** ./src/components/home.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HomeComponent = void 0;\nconst decarators_1 = __webpack_require__(/*! ../utils/decarators */ \"./src/utils/decarators.ts\");\nlet HomeComponent = class HomeComponent {\n    constructor() {\n        this.name = \"Taner\";\n    }\n    method() {\n    }\n};\nexports.HomeComponent = HomeComponent;\nexports.HomeComponent = HomeComponent = __decorate([\n    (0, decarators_1.Component)({\n        templateUrl: `/public/home.component.html`\n    })\n], HomeComponent);\n\n\n//# sourceURL=webpack://my-spa-framework/./src/components/home.component.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst app_component_1 = __webpack_require__(/*! ./components/app.component */ \"./src/components/app.component.ts\");\nconst router_1 = __webpack_require__(/*! ./utils/router */ \"./src/utils/router.ts\");\nconst set_route_1 = __webpack_require__(/*! ./utils/set-route */ \"./src/utils/set-route.ts\");\nwindow.addEventListener(\"load\", () => {\n    router_1.Router.navigate(app_component_1.AppComponent);\n    (0, set_route_1.setRouteEvent)();\n});\n\n\n//# sourceURL=webpack://my-spa-framework/./src/main.ts?");

/***/ }),

/***/ "./src/staticRoute.ts":
/*!****************************!*\
  !*** ./src/staticRoute.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.staticRoute = void 0;\nconst about_component_1 = __webpack_require__(/*! ./components/about.component */ \"./src/components/about.component.ts\");\nconst app_component_1 = __webpack_require__(/*! ./components/app.component */ \"./src/components/app.component.ts\");\nconst home_component_1 = __webpack_require__(/*! ./components/home.component */ \"./src/components/home.component.ts\");\nfunction staticRoute(path) {\n    if (path === \"home\") {\n        return home_component_1.HomeComponent;\n    }\n    else if (path === \"app\") {\n        return app_component_1.AppComponent;\n    }\n    else if (path === \"about\") {\n        return about_component_1.AboutComponent;\n    }\n    return app_component_1.AppComponent;\n}\nexports.staticRoute = staticRoute;\n\n\n//# sourceURL=webpack://my-spa-framework/./src/staticRoute.ts?");

/***/ }),

/***/ "./src/utils/component-base.ts":
/*!*************************************!*\
  !*** ./src/utils/component-base.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ComponentBase = void 0;\nclass ComponentBase {\n    constructor() {\n        setTimeout(() => this.scanDOMForNgModels(), 0);\n        setTimeout(() => this.scanDOMForOnClick(), 0);\n    }\n    scanDOMForNgModels() {\n        const elements = document.querySelectorAll(\"[ngModel]\");\n        for (const el of elements) {\n            const bindingValue = el.getAttribute(\"ngModel\");\n            if (bindingValue) {\n                let componentInstance = this;\n                while (componentInstance && !Object.prototype.hasOwnProperty.call(componentInstance, bindingValue)) {\n                    componentInstance = Object.getPrototypeOf(componentInstance);\n                }\n                if (componentInstance) {\n                    el.addEventListener(\"keyup\", e => {\n                        componentInstance[bindingValue] = e.target.value;\n                    });\n                }\n            }\n        }\n    }\n    scanDOMForOnClick() {\n        const buttons = document.querySelectorAll(\"[onclick]\");\n        for (const el of buttons) {\n            const methodName = el.getAttribute(\"onclick\");\n            if (methodName) {\n                el.addEventListener(\"click\", () => {\n                    if (typeof this[methodName] === \"function\") {\n                        this[methodName]();\n                    }\n                });\n            }\n        }\n    }\n}\nexports.ComponentBase = ComponentBase;\n\n\n//# sourceURL=webpack://my-spa-framework/./src/utils/component-base.ts?");

/***/ }),

/***/ "./src/utils/decarators.ts":
/*!*********************************!*\
  !*** ./src/utils/decarators.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = void 0;\nfunction Component(options) {\n    return function (constructor) {\n        constructor.prototype.template = options.template;\n        constructor.prototype.templateUrl = options.templateUrl;\n    };\n}\nexports.Component = Component;\n\n\n//# sourceURL=webpack://my-spa-framework/./src/utils/decarators.ts?");

/***/ }),

/***/ "./src/utils/fetch-template.ts":
/*!*************************************!*\
  !*** ./src/utils/fetch-template.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fetchTemplate = void 0;\nfunction fetchTemplate(url) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const response = yield fetch(url);\n        const text = yield response.text();\n        return text;\n    });\n}\nexports.fetchTemplate = fetchTemplate;\n\n\n//# sourceURL=webpack://my-spa-framework/./src/utils/fetch-template.ts?");

/***/ }),

/***/ "./src/utils/router.ts":
/*!*****************************!*\
  !*** ./src/utils/router.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Router = void 0;\nconst staticRoute_1 = __webpack_require__(/*! ../staticRoute */ \"./src/staticRoute.ts\");\nconst fetch_template_1 = __webpack_require__(/*! ./fetch-template */ \"./src/utils/fetch-template.ts\");\nconst set_route_1 = __webpack_require__(/*! ./set-route */ \"./src/utils/set-route.ts\");\nclass Router {\n    static navigate(component) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const appRoot = document.getElementById(\"root\");\n            if (appRoot) {\n                let template = new component().template;\n                if (new component().templateUrl) {\n                    template = yield (0, fetch_template_1.fetchTemplate)(new component().templateUrl);\n                }\n                appRoot.innerHTML = template;\n                new component();\n                (0, set_route_1.setRouteEvent)();\n            }\n        });\n    }\n    static route(path) {\n        return (0, staticRoute_1.staticRoute)(path);\n    }\n}\nexports.Router = Router;\n\n\n//# sourceURL=webpack://my-spa-framework/./src/utils/router.ts?");

/***/ }),

/***/ "./src/utils/set-route.ts":
/*!********************************!*\
  !*** ./src/utils/set-route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setRouteEvent = void 0;\nconst router_1 = __webpack_require__(/*! ./router */ \"./src/utils/router.ts\");\nfunction setRouteEvent() {\n    const routeElements = document.querySelectorAll(\"[route]\");\n    for (let el of routeElements) {\n        el.addEventListener(\"click\", (e) => {\n            const route = e.currentTarget.getAttribute(\"route\");\n            if (route) {\n                const component = router_1.Router.route(route);\n                router_1.Router.navigate(component);\n            }\n        });\n    }\n}\nexports.setRouteEvent = setRouteEvent;\n\n\n//# sourceURL=webpack://my-spa-framework/./src/utils/set-route.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;