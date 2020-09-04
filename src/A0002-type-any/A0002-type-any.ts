// use any in the latter case
function showMessage (msg: any) {
  return msg
}

console.log(showMessage('Ola daniel'))
console.log(showMessage(1))
console.log(showMessage([1, 2, 3]))
