# NodeJS-and-Dependency-Management
## Install LST NodeJS version
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```
## Initialize package.json
```sh
npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs-and-dependency-management) 
version: (1.0.0) 
description: for practices on package.json
entry point: (index.js) 
test command: 
git repository: https://github.com/L-Diasa/NodeJS-and-Dependency-Management.git
keywords: example, package.json, npm init
author: Lika Diasamidze likadiasa@gmail.com
license: (ISC) 
About to write to /Users/lika/Desktop/NodeJS and Dependency Management/package.json:

{
  "name": "nodejs-and-dependency-management",
  "version": "1.0.0",
  "description": "for practices on package.json",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/L-Diasa/NodeJS-and-Dependency-Management.git"
  },
  "keywords": [
    "example",
    "package.json",
    "npm",
    "init"
  ],
  "author": "Lika Diasamidze likadiasa@gmail.com",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/L-Diasa/NodeJS-and-Dependency-Management/issues"
  },
  "homepage": "https://github.com/L-Diasa/NodeJS-and-Dependency-Management#readme"
}


Is this OK? (yes) 
```
## Install fs-extra package globally
```sh
npm install -g fs-extra
```
## Install fs-extra package globally with --save-dev
```sh
npm install -g fs-extra --save-dev
```
