import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import './App.css';
import Pagination from './Pagination';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(pokemon => pokemon.name))
    })
    return () => cancel()
  }, [currentPageUrl])

  const goNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  const goPrevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <>
      {loading ? <div>loading...</div> : (
      <div className="container">
      <PokemonList pokemon={pokemon}/>
      <Pagination
        goNextPage={nextPageUrl ? goNextPage : null}
        goPrevPage={prevPageUrl ? goPrevPage : null}
      />
      </div>
      )}
    </>
  );
}

export default App;
