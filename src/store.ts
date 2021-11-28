import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { states } from '@states';

export const store = createStore(states, composeWithDevTools());
