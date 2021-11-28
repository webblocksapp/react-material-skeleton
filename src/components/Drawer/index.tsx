import React from 'react';
import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from '@mui/material';

export interface DrawerProps extends MuiDrawerProps {}

export const Drawer: React.FC<DrawerProps> = (props) => {
  return <MuiDrawer {...props} />;
};
