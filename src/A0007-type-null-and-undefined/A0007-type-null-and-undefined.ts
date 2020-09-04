let x
if (typeof x === 'undefined') x = 10
console.log(x * 2)

export function createPerson (
  firstName: string,
  lastName?:string
): {
  // return the function
  firstName: string;
  lastName?: string;
  } {
  // body the function
  return {
    firstName,
    lastName
  }
}

export function squareOf (x: any) {
  if (typeof x === 'number') { return x * x }
  return null
}

const squareOfTwoNumber = squareOf(2)
const squareOfTwoString = squareOf('2')

if (squareOfTwoNumber === null) {
  console.log('Invalid account')
} else {
  console.log(squareOfTwoNumber * 100)
}

if (squareOfTwoString === null) {
  console.log('Invalid account')
} else {
  console.log(squareOfTwoString * 100)
}
