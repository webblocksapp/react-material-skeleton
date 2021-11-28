import { RouteObject } from 'react-router-dom';
import { Pokemon, PokemonForm, PokemonList } from '@modules/Pokemon';

export const pokemonRoutes: RouteObject[] = [
  {
    path: 'pokemons',
    element: <Pokemon />,
    children: [
      { path: '', element: <PokemonList /> },
      { path: 'create', element: <PokemonForm mode="create" /> },
      { path: ':id/update', element: <PokemonForm mode="update" /> },
      { path: ':id', element: <PokemonForm mode="view" /> },
    ],
  },
];
