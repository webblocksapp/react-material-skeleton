import { PokemonAction, PokemonState } from '@app-types';
import { list, listing, error, create, creating, update, updating, remove, removing } from './handlers';

const initialState: PokemonState = {
  pokemons: [],
  listing: false,
  creating: false,
  updating: false,
  removing: false,
  error: '',
};

export const pokemonState = (state: PokemonState = initialState, action: PokemonAction) => {
  switch (action.type) {
    case 'POKEMON:LIST':
      return list(action.pokemons, state);
    case 'POKEMON:LISTING':
      return listing(action.flag, state);
    case 'POKEMON:LIST_FAILED':
      return error(action.message, state);
    case 'POKEMON:CREATE':
      return create(action.pokemon, state);
    case 'POKEMON:CREATING':
      return creating(action.flag, state);
    case 'POKEMON:CREATE_FAILED':
      return error(action.message, state);
    case 'POKEMON:UPDATE':
      return update(action.id, action.pokemon, state);
    case 'POKEMON:UPDATING':
      return updating(action.flag, state);
    case 'POKEMON:UPDATE_FAILED':
      return error(action.message, state);
    case 'POKEMON:REMOVE':
      return remove(action.id, state);
    case 'POKEMON:REMOVING':
      return removing(action.flag, state);
    case 'POKEMON:REMOVE_FAILED':
      return error(action.message, state);
    default:
      return state;
  }
};
