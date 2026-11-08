# TypeScript
TypeScript is a strict superset of JavaScript, the language that powers the web.
It took developers over 20 years to make JavaScript usable (by introducing TypeScript), because JavaScript has one major flaw:
It's dynamically and loosely typed, which is a huge PITA... Long story short, `0 == "0"` is true, `0 == []` is true, but `"0" == []` is false.
As a result, the `===` syntax was introduced, which is for type-script comparisons, where all of the above are false.

TypeScript will tell you that these are bad comparisons, because it has a proper type system that can catch these kinds of stupid errors.
TypeScript's syntax will feel natural to you due to its similarity with Java. Key differences:
- Variables: `let myVar = false` (type inference) or with static typing `let myVar: boolean = false`
- Functions: In ECMAScript 6 (and higher, which we are using here), functions are assigned to constants.
You *can* use the `function` syntax, but it's really not the idea to do so. You define a function using `const myFunc = () => {}`.

That's the key differences.
There are also classes, but please don't use them, it's not the JS/TS way.
JS is more of a functional programming language than an object oriented one because it doesn't have proper access modifiers.

The superpower of JS is its anonymous objects, which you can type using `interface` declarations.
This is the only "JS approved" object orientation.
