import { useState } from 'react'

export default function App() {
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    setIsActive(!isActive)
  }

  return (
    <>
      {isActive ? (
        <h1>활성화 - {String(isActive)}</h1>
      ) : (
        <h1>비활성화 - {String(isActive)}</h1>
      )}
      <button onClick={toggle}>토글</button>
    </>
  )
}
// 양방향데이터바인딩
/*Emmet 문법*/
//.box 탭
// .container>.inner>ul>li*10{$$} 탭탭
