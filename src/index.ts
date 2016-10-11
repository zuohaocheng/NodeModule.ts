import * as fs from 'fs';

console.log("hello world");
bar();

// Demo usage of node internal modules
let arr = fs.readdirSync('.');

// And external modules with type definition in .d.ts
// This needs lodash to be installed, run below to install:
// npm install --save lodash @types/lodash

// import * as _ from 'lodash';
// console.log(_.filter(arr, v => !v.match(/^\./)).join("\n"));

async function fooAsync() : Promise<string> {
    return new Promise<string>(function(resolve) {
        resolve('hello world async');
    })
};

async function bar() : Promise<void> {
    var result = await fooAsync();
    console.log(result);
}
