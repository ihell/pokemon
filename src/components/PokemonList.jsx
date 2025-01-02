import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map((pokemon, index) => (
        <li key={index}>
          <PokemonCard name={pokemon.name} />
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;