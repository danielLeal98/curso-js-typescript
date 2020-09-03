// TYPE ANOTATION

// Basic types that already exist
const nome = 'daniel' // any type of string
const age = 22 // 10, 1.57, -5.55, 0xf00d,
const adult = true // true ou false
const simbol = Symbol('qualquer-symbol') // symbol
// let big: bigint = 10n; //bgint

// Arrays
const arrayNumbers: Array<number> = [20, 22]
const arrayNumbers2: number[] = [23, 24]
const arrayStrings: Array<string> = ['a', 'b']
const arrayStrings2: string[] = ['a', 'b']

// Objects
const person:{nome:string, age:number, adult?:boolean} = {
  age: 22,
  nome: 'daniel'
}

console.log(person.nome)

// Functions
function sum (x: number, y:number):number {
  return x + y
}
const result = sum(2, 2)
console.log(result)

const sum2: (x:number, y:number) => number = (x, y) => x + y

console.log(sum2(3, 3))
