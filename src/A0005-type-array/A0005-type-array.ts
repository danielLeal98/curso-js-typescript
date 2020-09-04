// declaration forms the Arrays => Array<T> or T[]

export function multiplyArgs (...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1)
}

export function concatString (...args: string[]): string {
  return args.reduce((ac, value) => ac + value)
}

export function toUpperCase (...args: string[]): string[] {
  return args.map((value) => value.toUpperCase())
}

const resultMultiply = multiplyArgs(1, 2, 3)
const resultConcatenation = concatString('Daniel', 'Matheus', 'Do', 'Nascimento',
  'Leal')
const resultUpper = toUpperCase('Daniel', 'Matheus', 'Do', 'Nascimento',
  'Leal')

console.log(resultMultiply)
console.log(resultConcatenation)
console.log(resultUpper)
