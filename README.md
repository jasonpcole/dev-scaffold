# dev-scaffold
A simple Front-end development project springboard. Pug, SASS, and ES6 are yours to use with impunity. 

Build tasks are handled by NPM and Webpack. We got Babel transpiling your ECMAScript, so const your arrow funcs ya module classhole. There's even a dev process that'll spin up a local server for testing whatever freaky new feature you're building for animedolphinbukkake.edu. The live build process uglytranspminifbundlicates everything into a looming obelisk of code, towering over all who dare gaze upon it's monolithic gorgeousness; like an electrical panther seventy stories tall that shoots laser beams from it's eyes, anihillating everything it gifts its gaze upon with a bowel churning feline raowl that quakes the ground for miles and miles. 

## Motivation
Initially setting up all the codes and build processes is a drag, especially when you have an idea that needs coding NOW. Grunt/Gulp/etc are great at what they do, but for a less-formal project it seems easier to remove that layer of obsfucation and use the NPM Cli via the package.json file. 

## Logo goes here

## Tech

<b>Built with</b>
- [NPM](https://www.npmjs.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Pug](https://pugjs.org/)
- [Node-SASS](https://github.com/sass/node-sass)
- [Imagemin](https://github.com/imagemin/imagemin)

## Features
1. You can use ES6 in your Javascript, like boom pow blam, transpiled into JS and cocatenated with the push of a button. 
2. SASS - DRY out your stylesheets with definition variables, mixins, and functions. 
3. Pug templates
4. Image minification
5. Dev Server for local testing.

## Code Example
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation
Download the .babelrc, .gitignore, package.json, and webpack.config.js files.

Your project architecture should resemble the plan below. You don't have to manually create the subfolders in the dist directory, they'll be auto-generated with the first time you build the project. 

Run `npm i` to install the packages node needs to build this mammajamma. If there are no errors or issues, you are good to go.

    .
    ├─ dist         # Compiled files output directory
    │ ├─ css        # SASS output directory
    │ ├─ images     # Post-processed images directory
    │ ├─ js         # Webpack output directory
    ├─ src          # Dev source file directory
    │ ├─ images     # Unprocessed images directory
    │ ├─ scss       # SASS source file directory (.sass and/or .scss)
    │ ├─ views      # Pug template partial source directory
    │ ├─ index.pug  # Pug main template source file
    │ ├─ app.js     # Main Javascript source file
    ├─ .babelrc     # Babel config file
    ├─ .gitignore   # Git ignore file
    ├─ package.json # NPM config, build definitions, SASS processing commands
    ├─ webpack.config.js # HTML/JS/Image processing scripts
    └── ...

## Build commands

#### npm run prod
    Builds, compresses and outputs everything to the dist folder


#### npm run dev
    Builds everything, starts the livereload watch task, and spins up the development server at port 3000



MIT © [Jason Paul Cole](veil.the@gmail.com)