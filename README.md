# My TypeScript SPA Framework

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

My TypeScript SPA Framework is a modern front-end framework for building scalable and maintainable single-page applications (SPA). The framework is capable of creating class components, performing routing, and rendering lists and variables with minimal setup.

## Features

- TypeScript based
- Class Component Architecture
- Easy-to-Use Routing
- Custom CLI for scaffolding
- Built-in Webpack configuration

## Installation

You can use our custom CLI to install and create a new application.

```bash
npm install -g ts-spa-cli
ts new my-app
```

## Create New Components

You can easily generate new components using the CLI.

```bash
ts component about
ts c about
```

This will generate a new component named `about` under `src/components`, and also place its HTML output inside the `/public` directory.

## Project Structure

After creation, your project should look like this:

```
my-app/
├── src/
│   └── components/
├── public/
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## Running the App

To start the application, run the following command:

```bash
ts start
```

## Routing

To navigate between different components, you can simply add a `route` attribute to any HTML element. For example:

```html
<button route="app">App Component</button>
```

In the `src` directory, you'll have a function `staticRoute` to map the route to the corresponding component:

```typescript
import { AppComponent } from "./components/app.component";

export function staticRoute(path: string){
    if(path === "app"){
        return AppComponent;
    }

    return AppComponent;
}
```

This function takes the path (e.g., "app") as an argument and returns the corresponding component (`AppComponent` in this case).

This will start the dev server and open your app at `http://localhost:8080`.

## Building for Production

To build the application for production, run:

```bash
ts build
```

This will generate production-ready files inside the `/dist` directory.

## Deployment on IIS

You can simply copy and paste the files from the `/dist` directory to your IIS server for deployment.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
