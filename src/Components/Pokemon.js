import React, {useState, useEffect} from 'react'

function Pokemon() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
           .then(res => res.json())
           .then(json => setPokemons(json.results))
    }, [])

  return (
    <div>
       <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
      
      
    </div>
  )
}

export default Pokemon

