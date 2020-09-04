function noReturn (...args: string[]):void {
  console.log(args.join(' '))
}

const person = {
  nome: 'Daniel',
  surname: 'Matheus',

  showName (): void{
    console.log(this.nome + ' ' + this.surname)
  }
}
noReturn('daniel', 'lorena')
person.showName()

export { person }
