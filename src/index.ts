/// <reference path="../typings.d.ts" />
console.log("hello world");
bar();

async function fooAsync() : Promise<string> {
    return new Promise<string>(function(resolve) {
        resolve('hello world async');
    })
};

async function bar() : Promise<void> {
    var result = await fooAsync();
    console.log(result);
}
