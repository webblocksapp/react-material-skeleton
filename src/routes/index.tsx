import { RouteObject } from 'react-router-dom';
import { pokemonRoutes } from './pokemonRoutes';
import { MainLayout } from '@layouts';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [...pokemonRoutes],
  },
];
