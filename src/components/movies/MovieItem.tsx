import { Link } from 'react-router'
import type { Movie } from '@/stores/movie'
import Image from '@/components/movies/Image'

export default function MovieItem({ movie }: { movie: Movie }) {
  return (
    <div className="w-[200px]">
      <Image
        src={movie.Poster}
        width={200}
        height={300}
      />
      <Link to={`/movies/${movie.imdbID}`}>
        {movie.Title}/{movie.Year}
      </Link>
    </div>
  )
}
