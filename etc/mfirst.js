// const simple = require('./msecond');
// simple();
//in commomn cjs commonjs module

// import {simple2 as simple}  from "./msecond.mjs";  //call simple2 but name is  here simple
// simple();
// import simple23 from "./msecond.mjs";  //call simple23(wrong ) so default function call
// simple23();
// import {simple2 as simple}  from "./msecond.mjs";  //call simple2 but name is  here simple

import * as a2  from "./msecond.mjs";
console.log(a2);
console.log(a2.simple2());