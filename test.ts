interface User {
  name: string
  age: number
  emails: string[]
}

const a: User = {
  name: 'John',
  age: 20,
  emails: ['john@example.com', 'john@gmail.com']
}

const b: string[] = ['1', '2', '3']
console.log(a, b)

function add(a: string | number, b: string | number): string | number {
  return a + b
} //string | number : a의 타입은 union타입으로 지칭.(또는)

console.log(add(1, 2))
console.log(add('1', '2'))

interface UserA {
  name: string
}
interface UserB {
  age: number
}

const a: UserA & UserB = {
  name: 'Neo',
  age: 85
}
//UserA & UserB : intersection type(그리고)

function log(msg: string): void {
  console.log(msg)
  //   return undefined
}
log('Hello~') //undefined

function log2(msg: string): undefined {
  console.log(msg)
  return undefined
}
log2('Hello~')

const numbers: never[] = []
console.log(numbers[0])

//원시형 데이터->추론이 된다다
//문자, 숫자, 불린, null, undefined, symbol, bigint

//참조형 데이터->추론이 안된다. 직접 명시
//객체, 배열열
