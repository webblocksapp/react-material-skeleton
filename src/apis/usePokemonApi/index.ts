import axios, { AxiosResponse } from 'axios';
import { Pokemon } from '@app-types';

const baseApi = process.env.REACT_APP_BASE_API;

export const usePokemonApi = () => {
  const list = (): Promise<AxiosResponse<Pokemon[]>> => {
    return axios.get(`${baseApi}/pokemons`);
  };

  const create = (pokemon: Pokemon): Promise<AxiosResponse<Pokemon>> => {
    return axios.post(`${baseApi}/pokemons`, pokemon);
  };

  const update = (id: number, pokemon: Pokemon): Promise<AxiosResponse<Pokemon>> => {
    return axios.put(`${baseApi}/pokemons/${id}`, pokemon);
  };

  const remove = (id: number): Promise<AxiosResponse<Pokemon>> => {
    return axios.delete(`${baseApi}/pokemons/${id}`);
  };

  return { list, create, update, remove };
};
