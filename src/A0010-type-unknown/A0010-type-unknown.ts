// unknown é basicamente um any, sendo que mais seguro, sempre que precisar
// usar é necessário efetuar uma checagem de tipo
let x: unknown

x = 100
x = 'Luiz'
x = 900
x = 10

const y = 800

if (typeof x === 'number') console.log(x + y)
