import { useState } from 'react'

export default function App() {
  const title = 'World'
  // let count = 0
  //const [데이터이름, 데이터변경함수] = useState<데이터타입>(초기값)
  const [count, setCount] = useState(0)

  //jsx
  // const h2El = document.querySelector('h2')
  // h2El?.addEventListener('click', function(){
  //   count += 1
  // }
  const h1El = document.querySelector('h1')
  h1El?.addEventListener('click', () => {
    console.log('h1 clicked')
  })

  function handleClick() {
    //함수선언
    // count += 1
    const newCount = count + 1
    setCount(newCount)
    console.log(newCount)

    // setCount(count + 1) //비동기적 함수
    // console.log(count)
  }

  // const handleClick = function () {//함수표현현

  return (
    <>
      <h1>Hello {title}?!</h1>
      {/* <h2
        onClick={() => {
          // count += 1
          setCount(count + 1)
          setTimeout(() => {
            console.log(count)
          })
        }}> */}
      <h2 onClick={handleClick}>Count: {count}</h2>
    </>
  )
}
