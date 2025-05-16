// export /모듈  내보내기(JS)
// 1) Default Export / 기본 내보내기
//      -가져오는 곳에서 이름을 만듬!
//      - 1개 데이터 내보내기 가능

// 2) Named Export / 이름 내보내기
//      - 내보내는 곳에서 이름을 필수로 만듬!
//      - 여러개 데이터를 내보내기 가능

// export default 데이터
// export default function Button() {}
// export default function () {}
export default 123 //-> 가능함

export const num1 = 456

export interface User {
  name: string
  age: number
}

export const user: User = {
  name: 'Neo',
  age: 85
} //이름 내보내기
