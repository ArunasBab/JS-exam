// 1 Taškas

/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */

import { composition } from "./modules/math/composition.js";
import { division } from "./modules/math/division.js";
import { multiplication } from "./modules/math/multiplication.js";
import { subtraction } from "./modules/math/subtraction.js";
import * as math from "./modules/numbers/numbers.js";

let a = composition(math.one, math.four);
let b = division(math.four, math.two);
let c = subtraction(math.three, math.two);
let d = multiplication(math.five, math.two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
