class Person {
  constructor(public name: string) {
    this.name = name
  }
}

const neo = new Person('Neo')
const evan = new Person('Evan')

function getName(person: Person) {
  return person.name
}

console.log(getName(neo))
console.log(getName(evan))

//타입스크립트에서 Person 클래스가 하나의 타입으로 동작할 수 있다.
