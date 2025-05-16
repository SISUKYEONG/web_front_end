import { useEffect, useState } from 'react'
import Loader from '../Loader'

export default function Image({
  src,
  width,
  height
}: {
  src: string
  width: number
  height: number
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState('')
  useEffect(() => {
    init()
  }, []) //리액트에서는 useEffect에 콜백에는 async는 붙일 수 없다.

  async function init() {
    try {
      await loadImage()
      setIsLoading(false)
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  function loadImage() {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img') //메모리상에서 생성된 이미지
      img.src = src
      img.addEventListener('load', () => resolve(img)) //이미지가 로드되면 이벤트 핸들러를 호출하겠다.
      img.addEventListener('error', () =>
        reject(new Error('이미지 로드에 실패했어요'))
      ) //이미지가 로드에 실패하면 이벤트 핸들러를 호출하겠다.
    })
  }

  return (
    <div
      style={{ width, height }}
      className="relative bg-gray-100">
      {isLoading ? (
        <Loader />
      ) : message ? (
        <p>{message}</p>
      ) : (
        <img
          src={src}
          alt=""
        />
      )}
    </div>
  )
}
