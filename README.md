### typescript

Helpful configurations to note:
{
"compilerOptions": {
"target": "es5",  
 "module": "commonjs",  
 "lib": ["ES2018", "DOM"],
"outDir": "./build",  
 "strict": true,  
 "noImplicitAny": true,  
 },
"exclude": ["node_modules", "tests"]
}
target - sets what version of JS TypeScript will be transpiled to.
module - sets what module system will be used when transpiling. Node.js uses the common.js module system by default
lib - is used to say what libraries your code is using. In this case, ES2018 and the DOM API
outDir - where you want your src code to output to. Often named build, prod, or server (when using it serverside)
strict - enable strict typing
noImplicitAny - disallow the "any" type (covered in TypeScript Basics)
exclude - directories to exclude in compiling

Use strong checks to prevent developer errors:
One way to do this is to use noImplicitAny in tsconfig.json to prevent errors created by Typescript assuming Any type.
Turn on all strict checking by setting strict to true in your tsconfiig.json settings.

Pay attention to when to use Implicit vs Explicit typing:
const
Typing: Implicit
Value is immutable so type can't be changed
let

Typing: Explicit
Value and type can be changed
Function with controlled inputs

Typing: Implicit
Output is controlled and code is simpler
Single-line arrow function

Typing: Implicit
Simpler code
Longer function

Typing: Explicit
Easier to read
