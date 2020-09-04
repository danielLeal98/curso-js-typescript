// unknown vem antes do any na hierarquia
// const objectA: Record<string, unknown> = {
// key: 'Value A',
// key2: 'Value B'
// }

// objectA.key = 'Other Value'
// console.log(objectA)

const objectB: {
  key1: string;
  key2: string;
  key3?: string;
  [key: string]: unknown;
} = {
  key1: 'Value A',
  key2: 'Value B'
}

objectB.key = 'Other Value'
objectB.key3 = 'New Key'
objectB.key4 = 'New Key'

console.log(objectB)

// using readOnly the value is not change in array

const objectC: {
  readonly key1: string;
  readonly key2: string;
  key3?: string;
  readonly [key: string]: unknown;
} = {
  key1: 'Value A',
  key2: 'Value B'
}

// objectC.key = 'Other Value'
// objectC.key2 = 'New Key'
objectC.key3 = 'New Key'

console.log(objectC)
