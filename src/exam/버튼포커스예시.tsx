import { useRef } from 'react'

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <input
        type="text"
        ref={inputRef}
      />
      <button
        onClick={() => {
          inputRef.current?.focus()
        }}>
        포커스
      </button>
    </>
  )
}

// React에서는 이렇게 잘 사용하지 않는다.
// <button
//   onClick={() => {
//     document.querySelector('input')?.focus()
//   }}>
//   포커스
// </button>
// document.querySelector('input') 못찾으면 null 반환
