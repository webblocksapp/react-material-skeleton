import React from 'react';
import { Container as MuiContainer, ContainerProps as MuiContainerProps } from '@mui/material';

export interface ContainerProps extends MuiContainerProps {}

export const Container: React.FC<ContainerProps> = (props) => {
  return <MuiContainer {...props} />;
};
