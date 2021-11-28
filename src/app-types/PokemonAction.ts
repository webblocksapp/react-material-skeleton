import { Pokemon, ErrorAction, FlagAction } from '@app-types';

export type PokemonAction =
  | { type: 'POKEMON:LIST'; pokemons: Pokemon[] }
  | { type: 'POKEMON:CREATE'; pokemon: Pokemon }
  | { type: 'POKEMON:UPDATE'; id: number; pokemon: Pokemon }
  | { type: 'POKEMON:REMOVE'; id: number }
  | ErrorAction<'POKEMON'>
  | FlagAction<'POKEMON'>;
