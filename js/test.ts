//* primatives types
//ANCHOR primatives types

// let x: number = 1;

//lw ana m7ttsh type mn 3nde, hwa bya5od el type bta3 el value ele h7toha ka el type, w lw 3mlt reassign 2w update 2w kda l value btype gded s3tha hyde error

//? The Shape of an Object
// TypeScript knows the shape of an object—what member properties it does or doesn’t contain. TypeScript will log an error if the code attempts to access members of an object known not to exist. It may even suggest possible corrections.

/* let firstName = 'muriel!';
console.log(firstName.toUppercase());  
 error: Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'? */

//? Typescript any
// When a variable is declared without being assigned an initial value, TypeScript considers it to be of type any. A variable of this type can be reassigned without generating any error from TypeScript.
/* let first;
first = 'Anders';
first = 1337; */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//*functions
//ANCHOR functions

//? Explicit Return Types
/* function logGreeting(name:string): void{
     console.log(`Hello, ${name}!`)
   } */

//? Inferring Return Types
// TypeScript can also infer the types of values returned by functions. It does this by looking at the types of the values after a function’s return statements.

/* function ouncesToCups(ounces: number) {
  return `${ounces / 16} cups`;
}
const liquidAmount: number = ouncesToCups(3);
error: Type 'string' is not assignable to type 'number'. */

//? default params
// If a parameter is assigned a default value, TypeScript will infer the variable type to be the same as the default value’s type. (This is similar to how TypeScript infers the type of an initialized variable to be the same as the type of its initial value.)

// The following code snippet logs a string to greet a user’s name, and defaults to the name 'Anonymous' if no name is provided.

/* function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
} */

//? Optional Parameters
// TypeScript normally gives an error if we don’t provide a value for all arguments in a function. This isn’t always desirable; sometimes we’d like to skip providing values.

/* function greet(name?: string) {
  console.log(`Hello, ${name|| 'Anonymous'}!`);
}
greet(); // Prints: Hello, Anonymous! */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//*Arrays and tuples
//ANCHOR Arrays and tuples

//? Arrays:
// let names: string[] = ['Danny', 'Samantha'];
// let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];

//? tuples
// let numbersTuple: [number, number, number] = [1, 2, 3, 4];
// Type Error! numbersTuple should only have three elements.

// let mixedTuple: [number, string, boolean] = ['hi', 3, true];
// Type Error! The first elements should be a number, the second a string, and the third a boolean.

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */
