import { Pokemon, PokemonState } from '@app-types';

export const list = (pokemons: Pokemon[], state: PokemonState) => {
  return { ...state, pokemons, error: '' };
};

export const listing = (flag: boolean, state: PokemonState) => {
  return { ...state, listing: flag };
};

export const create = (pokemon: Pokemon, state: PokemonState) => {
  const pokemons = [...state.pokemons, pokemon];
  return { ...state, pokemons, error: '' };
};

export const creating = (flag: boolean, state: PokemonState) => {
  return { ...state, creating: flag };
};

export const update = (id: number, pokemon: Pokemon, state: PokemonState) => {
  let pokemons = [...state.pokemons];
  pokemons = pokemons.map((item) => {
    if (item.id === id) {
      return { ...item, ...pokemon };
    }

    return item;
  });

  return { ...state, pokemons, error: '' };
};

export const updating = (flag: boolean, state: PokemonState) => {
  return { ...state, updating: flag };
};

export const remove = (id: number, state: PokemonState) => {
  const pokemons = [...state.pokemons].filter((pokemon) => pokemon.id !== id);
  return { ...state, pokemons, error: '' };
};

export const removing = (flag: boolean, state: PokemonState) => {
  return { ...state, removing: flag };
};

export const error = (message: string, state: PokemonState) => {
  return { ...state, error: message };
};
