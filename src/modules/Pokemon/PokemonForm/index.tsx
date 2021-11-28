import React from 'react';
import { FormProps } from '@app-types';
import { Typography } from '@components';

export const PokemonForm: React.FC<FormProps> = ({ mode }) => {
  return (
    <>
      <Typography variant="body1">Pokemon form in {mode} mode</Typography>
    </>
  );
};
