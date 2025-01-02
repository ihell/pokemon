import React from 'react';

const PokemonCard = ({ name }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{name}</h2>
    </div>
  );
};

export default PokemonCard;