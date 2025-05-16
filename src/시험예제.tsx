// // # 현재 경로에 프로젝트 구성
// // npm create vite@latest .
// //   # > React 선택
// //   # > JavaScript + SWC 혹은 TypeScript + SWC 선택

// // App.tsx
// // App.jsx
// // import : 타입스크립트, 자바스크립트
// // <div>구문 : html 포함
// // 하나의 컴포넌트에 어떤 언어를 포함하는지
// // 타입스크립트+html

// interface User {
//   name: String
//   age: number
// }
// const user: User = {
//   name: 'Neo',
//   age: 22
// }
// /* interface 객체타입의 .. 만들때 사용 */

// function add<T>(a: T, b: T) {
//   return a + b
// }

// add(1, 2)
// add('1', '2')
// /* 타입변수<> 제네릭 */
// /* 특정함수가 호출에 따라서 여러타입을 다룰 수 있다. */

// import { useState } from 'react'

// // useState 반응형 데이터
// // 반응형 데이터는 react 기준으로 상태:state

// 동적세그먼트
// path: '/movies/:movieId'
// useParams 훅으로 주소 부분에 있는 매개변수 가지고 온다.

// App 트리구조
// 전역데이터를 정의할 때,
// 범위를 가지는는 데이터 정의 : Context api

// 가볍고 상태하기 쉬운 zustand 사용
// combind 미들웨어

// *SPA의 장점
// 전통적인 페이지 구분 HTML 여러개

// 현대적인 페이지 구분 SPA(Single Page Application) 하나만 있는 HTML
// 매번 새로운 내용들을 불러오지 않고, 바뀌는 부분만 교체하면 된다. 예. 헤더, 푸터

// React Router
// <a> 태그 대신 <Link>, <NavLink> 사용

// createContext, useContext 사용

// 타입별칭을 사용해서
// type abc = string | nunber | boolean
// -> abc는 유니언 타입이다

// export const userTodoStore = create<UserTodoState>((set) => ({

// {todos.map(todo=>{key=(id), value=(todo)})}
