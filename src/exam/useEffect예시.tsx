import { useState, useMemo, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(1)

  // 계산된 데이터: useMemo(실행할 함수, 의존성배열)
  const double = useMemo(() => count * 2, [count])
  //double 계산된 데이터

  // 데이터감시: useEffect(실행할 함수, 의존성배열)
  useEffect(() => {
    console.log(`double: ${double}`)
  }, [double])

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>Count : {count}</h1>
      <h2>Double : {double}</h2>
    </>
  )
}
