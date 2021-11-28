import React from 'react';
import { Box, Link, Typography } from '@components';
import { Outlet } from 'react-router-dom';

export const Pokemon: React.FC = () => {
  return (
    <>
      <Typography variant="h3">Pokemons module</Typography>
      <Box display="flex" justifyContent="space-between" mt={2} maxWidth={300}>
        <Link to="">Pokemons</Link>
        <Link to="create">Add pokemon</Link>
      </Box>
      <Box mt={2}>
        <Outlet />
      </Box>
    </>
  );
};

export * from './PokemonForm';
export * from './PokemonList';
