export interface User {
  name: string
  age: number
  emails: string[]
  isValid?: boolean //? 선택적 프로퍼티
}

const neo: User = {
  name: 'Neo',
  age: 85,
  emails: ['neo@gmail.com']
}

console.log(neo)
