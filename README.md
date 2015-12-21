# NodeModule.ts
A Template for Node modules written in TypeScript.

It can be used in Windows and Unix. 

## Setup

Make sure `tsd` is installed globally. Also, `grunt-cli` is recommend.

	npm install -g tsd grunt-cli

Install the dependencies and basic TypeScript definitions.

	npm install
	tsd install
    
It uses ES6 target now to support `async`/`await`, so `node.js` 5.3.0 is recommended.

## Run

`grunt` can be used to build & run the code. 

## IDEs
The suggested IDE is Visual Studio Code.