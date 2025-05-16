import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      isLoading: false,
      message: '', // 빈문자열이면 거짓
      movies: [] as Movies, // 타입 단언
      currentMovie: null as MovieDetails | null
    },
    (set, get) => ({
      setSearchText: (searchText: string) => {
        set({ searchText })
      },
      fetchMovies: async () => {
        const { searchText, isLoading } = get()
        if (!searchText.trim()) return //사용자가 입력을 안한 상태면면
        if (isLoading) return //이미 로딩중이면 더 이상 로딩하지 않음
        set({ isLoading: true, message: '' })
        // await new Promise(resolve => setTimeout(resolve, 1000)) //3초 대기
        try {
          const {
            data: { Search: movies = [], Response, Error }
          } = await axios(`https://omdbapi.com?apikey=7035c60c&s=${searchText}`)
          if (Response === 'False') {
            set({
              message: Error,
              isLoading: false
            })
            return
          }
          set({
            movies,
            isLoading: false
          })
          if (!movies.length) {
            set({
              message: '검색된 결과가 없습니다.'
            })
            //자바스크립트에서 1,-1은 참, 0은 거짓
          }
        } catch (error) {
          if (error instanceof Error) {
            set({ message: error.message })
          }
        } finally {
          set({
            isLoading: false
          })
        }
      },
      fetchMovieDetails: async (movieId?: string) => {
        if (!movieId) return
        set({
          currentMovie: null,
          isLoading: true
        })
        const { data } = await axios(
          `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
        )
        set({
          currentMovie: data,
          isLoading: false
        })
      }
    })
  )
)

// create(() => ({}))
// return이 없을때는 ()로 묶어줘야함

// 자바스크립트 함수 표현
// c: function (){}
// d: ()=>{}
// e() {}

// 비동기 함수 표현
// c: async function () {}
// d: async ()=>{}
// async e() {}

//combine middleware
// create(
//   combine(
//     {
//       상태1: 데이터,
//       상태2: 데이터
//     },
//     (set, get) => {
//       return {
//         액션1: 함수,
//         액션2: 함수
//       }
//     }
//   )
// )
