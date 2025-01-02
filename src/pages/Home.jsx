import React, { useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';
import { fetchPokemons } from '../services/pokemonService';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemons = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
      setLoading(false);
    };

    loadPokemons();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Pokémon List</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
};

export default Home;