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

//? Typescript Assertions
// as keyword used to override typescript default behaviour.

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
// 3) when we want to declare a variable that its type can not be inferred correctly (let user:boolean|string =false)
// 4) function arguments
// 5) function returns
// 5) generics inference

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

//? basics

//public: this method can be called any where any time
//protected: this method can only be called by other methods in this class or by other methods in child classes
//private: this method can only be called by other methods in this class

//if we override function in a child class,it has to have the same modifier

//classes can be used to refere to a type of object, not just creating objects.

//if we use or(|) between 2 objects, it will allow access to the shared properties between them only.(exept if we use type guards)

//interfaces used to connect different classes together in one interface.and make them loosly coupled.(use when we have very different obejcts that we want to work together)
//interfaces can be extended just like classes.

//abstract class(ele mtrgmo enha bt7l moshklt this, enha y3ny this htb2amwgoda bs msh now)(strongly couple classes together)
// cant be used to create object directly
// only used as parent class
// can contain real implementation for some methods
//the implemented methods can refer to methods that dont actually exist yet.(we still need to provide names and types for the un-implemented methods)
//any class that eءtends abstract class has to implement this methods

// It is important to understand that, just like any other aspect of type information, access modifier keywords are only validated at compile time, with no real privacy or security benefits at runtime. This means that even if we mark something as private, if a user decides to set a breakpoint and inspect the code that’s executing at runtime, they’ll still be able to see everything.

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

//? Enums
//used to store closely related values mainly for small data, that are known during the compile time; becuase we cant add or update anything in it after compiling like data from a http request for example.
//By default, the values in an enum are also given a numeric value starting at 0. However, the numeric value can manually be set to any number explicitly or by calculation.
//can be mimicked in javascript using object.freeze()

//it just a signale to other engineers that these are closely related values.
/* enum MatchResult{
  HomeWin='H'
  AwayWin='A'
  Draw='D'
} */
//we can define it without values, just keys.
/* enum MatchResult{
  HomeWin
  AwayWin
  Draw
} */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* generics
//ANCHOR generics

//?basics
//use types as arguments work inside functions.
//allow us to define the type at the future.

/* class HoldAnyThing<TypeOfData> {
  data: TypeOfData | undefined;
}

let holdNumber = new HoldAnyThing<number>();
holdNumber.data = 1;
let holdString = new HoldAnyThing<string>();
holdString.data = '1'; */

//?generics with functions

/* function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}
function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}

printAnything(['1', '2', '3']);
printAnything([1, 2, 3]);
generics can make type inference, it will replace every T with the type.
recommended to put type explicitly */

//? generic constrains

/* class Car {
  print() {
    console.log('iam a car');
  }
}
class House {
  print() {
    console.log('iam a house');
  }
}

interface printable {
  print(): void;
}
// T extends printable, means that T must has at least the print function.
function prtinCarsOrHouses<T extends printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].print());
  }
}
prtinCarsOrHouses<House>([new House(), new House(), new House()]);
prtinCarsOrHouses<Car>([new Car(), new Car(), new Car()]); */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* decorators
//ANCHOR decorators

//? basics
//functions that can be used to modify/change different properties/methods inside a class.
//not the same as javascript decorators.
//used only inside/on classes
//understanding the order in which decorators are ran, are the key to understand them.

//decoratores are only called one single time,when the code for this class is ran to define the class,(not when an instance is created)
//first argument is the prototype of the object.
//second argument is the key of the property/method/accessor on the object.
//third arugment is the property descriptor.

//? example
/* class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }
  @testDecorator
  // === testDecorator(Boat.prototype, 'pilot') (call outside the class)
  pilot(): void {
    console.log('nady');
  }
} */

/* function testDecorator(
  target: any,
  key: string,
  desc: PropertyDescriptor
): void {
  console.log('target:', target);
  console.log('key:', key);

  // we cant change prototype methods like this in the decoratores => target[key]=()=>, because typescript after calling decorator, will use the PropertyDescriptors to prevent that.
  // if we need that we should wrap the method with descriptors.
  //   const method = desc.value;
  // desc.value = function () {
  //   try {
  //     method();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
} */

//? decorator factory
// if we want to customize the decorator we can wrap it with a function and return the decorator.(this is what is called decorator factory)

//?parameter decorator
/* class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }

  pilot(@parameterDecorator speed: string, @parameterDecorator walk: boolean): void {
    console.log(speed);
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
  //pilot 0
  //pilot 1
} */

//?class decorator

/* @classDecorator
class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }

  pilot(speed: string, walk: boolean): void {
    console.log(speed);
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
} */

//* Bottom type: never
//ANCHOR Bottom type: never
/*
A bottom type (symbol: ⊥) is a type that describes no possible value allowed by the system. To use our set theory mental model, we could describe this as “any value from the following set: { } (intentionally empty)”

?TypeScript provides one bottom type: never.

At first glance, this may appear to be an extremely abstract and pointless concept, but there’s one use case that should convince you otherwise. Let’s take a look at this scenario below.

?Exhaustive conditionals
Let’s consider the following scenario:

class Car {
  drive() {
    console.log("vroom")
  }
}
class Truck {
  tow() {
    console.log("dragging something")
  }
}
type Vehicle = Truck | Car
 
let myVehicle: Vehicle = obtainRandomVehicle()
 
// The exhaustive conditional
if (myVehicle instanceof Truck) {
  myVehicle.tow() // Truck
} else if (myVehicle instanceof Car) {
  myVehicle.drive() // Car
} else {
  // NEITHER!
  const neverValue: never = myVehicle
}
Try
Now, leaving the conditional exactly as-is, let’s add Boat as a vehicle type:

class Car {
  drive() {
    console.log("vroom")
  }
}
class Truck {
  tow() {
    console.log("dragging something")
  }
}
class Boat {
  isFloating() {
    return true
  }
}
type Vehicle = Truck | Car | Boat
 
let myVehicle: Vehicle = obtainRandomVehicle()
 
// The exhaustive conditional
if (myVehicle instanceof Truck) {
  myVehicle.tow() // Truck
} else if (myVehicle instanceof Car) {
  myVehicle.drive() // Car
} else {
  // NEITHER!
  const neverValue: never = myVehicle
Type 'Boat' is not assignable to type 'never'.
}
Try
Effectively, what has happened here is that we have been alerted to the fact that a new possibility for Vehicle has been introduced. As a result, we don’t end up with the type for myVehicle as a never in that final else clause.

I recommend handling this a little more gracefully via an error subclass:

class UnreachableError extends Error {
  constructor(_nvr: never, message: string) {
    super(message)
  }
}
 
// The exhaustive conditional
if (myVehicle instanceof Truck) {
  myVehicle.tow() // Truck
} else if (myVehicle instanceof Car) {
  myVehicle.drive() // Car
} else {
  // NEITHER!
  throw new UnreachableError(
    myVehicle,
Argument of type 'Boat' is not assignable to parameter of type 'never'.
    `Unexpected vehicle type: ${myVehicle}`
  )
}
Try
Now, one of three things will happen in that final else block

We will have handled every case before reaching it, and thus we will never enter the final else block
We will catch upstream code changes that need to be handled in this conditional at compile time (e.g., adding the Boat case)
If somehow an unexpected value “slip through” and is not caught until we actually run the code, we will get a meaningful error message
Note that this approach works nicely with a switch statement, when the UnreachableError is thrown from the default case clause.
*/

// ​‌‌‍‍⁡⁣⁢⁢‍react ts
// https://fem-react-typescript.vercel.app/

// ⁡⁢⁢⁡⁢⁢⁢Type template literals⁡
/* type User = {
  name: string;
  age: number;
};

type ActionTypes = `update-${keyof User}`;

type Actions<T, K extends keyof T & string> = {
  type: `update-${K}`;
  payload: T[K];
};

type UpdateNameAction = Actions<User, 'name'>; 
*/

/* type CharacterClass = "warror" | "paladin" | "wizard" | "cleric";

type LawChaos = "lawful" | "neutral" | "chaotic";
type GoodEvil = "good" | "neutral" | "evil";

type Alignment = `${LawChaos}-${GoodEvil}`;

type Character = {
  name: string;
  profession: CharacterClass;
  alignment: Alignment;
};

const steve: Character = {
  name: "Steve",
  profession: "wizard",
  alignment: "chaotic-good",
}; 
*/
