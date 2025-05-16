import abc from './export 내보내기 예제'
// import { num1 as n1, type User } from './export예제'
import { num1 as n1 } from './export 내보내기 예제'
import type { User } from './export 내보내기 예제'

console.log(abc) //123
console.log(n1) //456

const user: User = {
  name: 'Neo',
  age: 22
}

console.log(user)
