import { Pokemon, ErrorState, FlagState } from '@app-types';

export type PokemonState = {
  pokemons: Pokemon[];
} & FlagState &
  ErrorState;
