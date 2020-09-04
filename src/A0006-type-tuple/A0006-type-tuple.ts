// Tuple
const dataClient: [number, string] = [1, 'Daniel']
const dataClient2: [number, string, string] = [1, 'Daniel', 'Leal']
const dataClient3: [number, string, string?] = [1, 'Daniel']
const dataClient4: [number, string, ...string[]] = [1, 'Daniel']
// const dataClient5: readonly [number, string, string?] = [1, 'Daniel']

// dataClient[0] = 100
// dataClient[1] = 'Lorena'

console.log(dataClient)
console.log(dataClient2)
console.log(dataClient3)
console.log(dataClient4)
// dataClient5.pop()
// console.log(dataClient5)

// readonly array
const array: readonly string[] = ['Daniel', 'Leal']
const array2: ReadonlyArray<string> = ['Daniel', 'Leal']

console.log(array)
console.log(array2)
