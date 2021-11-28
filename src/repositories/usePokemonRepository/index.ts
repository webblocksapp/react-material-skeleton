import { Dispatch } from 'react';
import { Pokemon, PokemonAction, RootState } from '@app-types';
import { handleAxiosApi, getAxiosErrorMessage } from '@utils';
import { usePokemonApi } from '@apis';
import { useDispatch } from 'react-redux';

export const usePokemonRepository = () => {
  const dispatch = useDispatch<Dispatch<PokemonAction>>();
  const pokemonApi = usePokemonApi();

  const list = async () => {
    try {
      dispatch({ type: 'POKEMON:LISTING', flag: true });
      const pokemons = await handleAxiosApi<Pokemon[]>(pokemonApi.list());
      dispatch({ type: 'POKEMON:LIST', pokemons });
    } catch (error) {
      dispatch({ type: 'POKEMON:LIST_FAILED', message: getAxiosErrorMessage(error) });
    } finally {
      dispatch({ type: 'POKEMON:LISTING', flag: false });
    }
  };

  const create = async (pokemon: Pokemon) => {
    try {
      dispatch({ type: 'POKEMON:CREATING', flag: true });
      const createdPokemon = await handleAxiosApi<Pokemon>(pokemonApi.create(pokemon));
      dispatch({ type: 'POKEMON:CREATE', pokemon: createdPokemon });
    } catch (error) {
      dispatch({ type: 'POKEMON:CREATE_FAILED', message: getAxiosErrorMessage(error) });
    } finally {
      dispatch({ type: 'POKEMON:CREATING', flag: false });
    }
  };

  const update = async (id: number, pokemon: Pokemon) => {
    try {
      dispatch({ type: 'POKEMON:UPDATING', flag: true });
      const updatedPokemon = await handleAxiosApi<Pokemon>(pokemonApi.update(id, pokemon));
      dispatch({ type: 'POKEMON:UPDATE', id, pokemon: updatedPokemon });
    } catch (error) {
      dispatch({ type: 'POKEMON:UPDATE_FAILED', message: getAxiosErrorMessage(error) });
    } finally {
      dispatch({ type: 'POKEMON:UPDATING', flag: false });
    }
  };

  const remove = async (id: number) => {
    try {
      dispatch({ type: 'POKEMON:REMOVING', flag: true });
      await handleAxiosApi(pokemonApi.remove(id));
      dispatch({ type: 'POKEMON:REMOVE', id });
    } catch (error) {
      dispatch({ type: 'POKEMON:REMOVE_FAILED', message: getAxiosErrorMessage(error) });
    } finally {
      dispatch({ type: 'POKEMON:REMOVING', flag: false });
    }
  };

  const selectPokemons = (state: RootState) => state.pokemonState.pokemons;

  return {
    list,
    create,
    update,
    remove,
    selectPokemons,
  };
};
