import React, { useEffect } from 'react';
import { Datatable } from '@components';
import { usePokemonRepository } from '@repositories';
import { useSelector } from 'react-redux';
import { DatatableColumn } from '@app-types';

export const PokemonList: React.FC = () => {
  const { selectPokemons, list } = usePokemonRepository();
  const pokemons = useSelector(selectPokemons);
  const columns: DatatableColumn[] = [
    {
      name: 'name',
      label: 'Name',
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  useEffect(() => {
    list();
  }, []);

  return <Datatable title="Pokemons" data={pokemons} columns={columns} />;
};
