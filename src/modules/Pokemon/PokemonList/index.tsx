import React, { useEffect } from 'react';
import { Edit as EditIcon } from '@mui/icons-material';
import { IconButton, List, ListItem, Link, Typography } from '@components';
import { usePokemonRepository } from '@repositories';
import { useSelector } from 'react-redux';

export const PokemonList: React.FC = () => {
  const { selectPokemons, list } = usePokemonRepository();
  const pokemons = useSelector(selectPokemons);

  useEffect(() => {
    list();
  }, []);

  return (
    <List>
      {pokemons.map((pokemon) => (
        <ListItem key={pokemon.id}>
          <Typography variant="body1">{pokemon.name}</Typography>
          <Link to={`${pokemon.id}/update`}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
