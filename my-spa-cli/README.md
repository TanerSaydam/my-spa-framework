# My SPA CLI Tool

A CLI tool for speeding up development workflow in Single Page Applications (SPAs).

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Commands](#commands)
4. [Contributing](#contributing)
5. [License](#license)

## Installation

You can install this CLI tool globally using npm:

```bash
npm install -g ts-spa-cli
```

Or you can install it for a single project:

```bash
npm install ts-spa-cli --save-dev
```

## Usage

After installing the package, you can use the \`ts\` command to access its functionalities.

```bash
ts <command> [options]
```

## Commands

Here are the available commands:

### \`start\`

Run the project on localhost:8080

```bash
ts start
```

### \`build\`

Build the project for ISS.

```bash
ts build
```

### \`new\`

Create a new project.

```bash
ts new --name <project_name>
```

You will be prompted to enter the project name if you don't specify it using \`--name\`.

### \`component\` or \`c\`

Create a new component.

```bash
ts c --name <component_name>
```

If you don't provide a \`--name\`, it will default to "new".

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for more details.
