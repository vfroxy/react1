import { useState, useEffect } from "react"
import MovieList from "./components/MovieList/MovieList"

function App() {
  // 1. Stan movies - na poczatku pusta tablica
  const [movies, setMovies] = useState([])

  // 5. Osobny stan na wartosc inputa
  const [newMovie, setNewMovie] = useState('')

  // 2. Po pierwszym renderze ustawiamy trzy domyslne filmy
  useEffect(() => {
    setMovies(['Shrek', 'Król Lew', 'Toy Story'])
  }, [])

  // 6. Dodanie filmu na koniec listy bez modyfikowania starej tablicy
  const addMovie = () => {
    const title = newMovie.trim()
    if (title === '') return

    setMovies(prevMovies => [...prevMovies, title])
    setNewMovie('')
  }

  return (
    <>
      <h1>Biblioteczka filmów</h1>

      <div>
        <input
          placeholder="Wpisz tytuł filmu..."
          value={newMovie}
          onChange={e => setNewMovie(e.target.value)}
        />
        <button onClick={addMovie}>Dodaj film</button>
      </div>

      {/* 3. Przekazanie listy filmow przez propsy */}
      <MovieList movies={movies} />
    </>
  )
}

export default App
