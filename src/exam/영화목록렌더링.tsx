import { useState, useEffect } from 'react'

// React Hook(훅)
// useXXX <= Hooks

export type Movies = Movie[]

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function App() {
  const [movies, setMovies] = useState<Movies>([])
  //Typing 타이핑 : 타입을 지정하는 행위

  useEffect(() => {
    fetchMovies()
  }, []) // 최초 한번 실행

  // useEffect(실행할 함수, 의존성배열)
  // useEffect(()=>{},[])

  async function fetchMovies() {
    const res = await fetch('https://omdbapi.com?apikey=7035c60c&s=avengers')
    const { Search } = await res.json() //서버에서 가지고 온 데이터
    setMovies(Search)
  }

  return (
    <>
      <h1>영화 목록</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </>
  )
}
