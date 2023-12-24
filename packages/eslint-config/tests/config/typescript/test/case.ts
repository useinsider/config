// Node doesn't have `window` object
window.btoa('test')

function sum(a,b){
    return a + b;
}

/* eslint-disable @typescript-eslint/no-unused-vars */

const age: any = 'seventeen';
const bridge = <T>(a: T) => a;

((
    bridge({
        prop1: 'value1'
    })
));

class Foo {
    constructor () {}

    bar () {
        return this;
    }
    baz () {
        return this;
    }
}

const x: Array<string> = ['a', 'b'];
const y: ReadonlyArray<string> = ['a', 'b'];
const promise = Promise.resolve('value');

if (promise) {
    // Do something
}

fetch('https://example.com');
void fetch('https://example.com');

enum Animal {
    CAT
}

type Tuple1 = [string, ];
type Tuple2 = [
    string,
    number
];

function generic1 <F,> () {}

function generic2<
    F,
    T
> (param1: F, param2: T) {}

type TypeSpace<T=true> = T
