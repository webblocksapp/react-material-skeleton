import { RootState } from '@app-types';
import { combineReducers as combineStates } from 'redux';
import { pokemonState } from './pokemonState';
import { sidebarState } from './sidebarState';

export const states = combineStates<RootState>({
  pokemonState,
  sidebarState,
});
