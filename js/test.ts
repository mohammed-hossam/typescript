// Notes
//  npx tsc test --outDir ../build  dah by7ot file mo3yn fe folder mo3yn
// npx tsc  dah by7ot kol el files ele fe folder 3mlo fel configfile "rootDir" fe folder mo3yn 3mlo fl configfile brdo esmo "outDir"

//* primatives types
//ANCHOR primatives types
//? basicss
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

//? function to variable
/* let logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}; */

//? Explicit Return Types
/* function logGreeting(name:string): void{
     console.log(`Hello, ${name}!`)
   } */
/* let logNumber= (i: number) : void  => {
  console.log(i);
}; 
also if we return null or undefined, it wil not give error if the return type is void
*/

/* const throwError = (msg: string): never => {
  throw new Error();
}; 
never means function will never reach the end of this function
*/

/* const throwError = (msg: string): string => {
  if(!msg){throw new Error();}
  return msg;
}; 
in this case we dont use never
*/

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

//? destructing obejct Parameter

// es15;
/* const logWeather = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
}; */

// typescript
/* const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
}; */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* objects
// ANCHOR objects

//?object literal
// const obj: { name: string; age: number } = { name: 'nady', age: 23 };

//?object destructing
/* const profile = {
  name: 'nady',
  age: 20,
  coords: { lat: 0, lng: 15 },
  setAge(age: number): void {
    this.age = age;
  },
};

const {age,name}: { age: number;name:string } = profile;
const {coords:{lat,lng}}: { coords:{lat:number;lng:number} } = profile;
*/

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */
//*Arrays
//ANCHOR Arrays

//? basics:
// let names: string[] = ['Danny', 'Samantha'];
// let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];

// let arr=[] this infer any type

//?help with inference when extracting values
/* 
let names = ['nady', 's3eed'];
let nam = names[1]; //type of nam =string
*/

//?prevent adding incompitiable values
/*
let names = ['nady', 's3eed'];
names.push(100); //error
*/

//?multiple types in Arrays
// const importantDates: (string | Date)[] = [new Date(), '1-9-1995'];

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* tuples
//ANCHOR tuples

//? basics
/*  
let numbersTuple: [number, number, number] = [1, 2, 3, 4];
Type Error! numbersTuple should only have three elements. 
*/

//? mixedTuple
/* 
let mixedTuple: [number, string, boolean] = ['hi', 3, true];
Type Error! The first elements should be a number, the second a string, and the third a boolean. (in arrays order in not important if there are different types)
*/

//? using allias
/* 
type Drink =[string,boolean,number]
const pepsi: Drink =['brown',true,21]
*/

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* when to use annotations instead of inference
//ANCHOR when to use annotations instead of inference

// 1) function return 'any' type.
// 2) delayed intialization
// 3) when we want to declare a variable that its type cant be inferred correctly (let user:boolean|string =false)
// 4) function arguments
// 5) function returns

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* Interfaces:
//ANCHOR Interfaces

//? Basics:
// interface=> creating new type, that describe the propery names and value types of an object.

/* 
interface vehicle {
  name: string;
  year: number;
  broken: boolean;
  summery():string;
}
function printVehicle(car: vehicle):void {
  console.log(car.name);
  console.log(car.year);
  console.log(car.broken);
}
printVehicle({ name: 'toyota', year: 2000, broken: false, });
*/

//? code reuse
//we can use a single interface, to describe properties of very different objects.

/* interface reportable {
  summery(): string;
}
function printSummery(item: reportable): void {
  console.log(item.summery());
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: false,
  summery(): string {
    return this.name;
  },
};
const drink = {
  color: 'civic',
  carbonated: true,
  sugar: 50,
  summery(): string {
    return this.color;
  },
};
printSummery(oldCivic);
printSummery(drink); 
*/

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* classes
//ANCHOR classes

//public: this method can be called any where any time
//private: this method can only be called by other methods in this class
//protected: this method can only be called by other methods in this class or by other methods in child classes

//if we override function in a child clss,it has to have the same modifier

//classes can be used to refere to a type of object, not just creating objects.

/* class User {
  constructor(
    public name: string,
    public location: { lat: number; lng: number }
  ) {}
} */
//or
/* class User {
  name: string;
  location: { lat: number; lng: number };
  constructor(name: string, location: { lat: number; lng: number }) {
    this.name = name;
    this.location = location;
  }
} */

// let nady = new User('nady', { lat: 1, lng: 2 });
// console.log(nady);
