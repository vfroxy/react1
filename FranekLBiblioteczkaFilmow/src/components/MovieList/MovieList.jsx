function MovieList({ movies }) {
  // 4. Wyswietlenie filmow za pomoca .map() z wlasciwoscia key
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  )
}

export default MovieList
