import React from 'react';
import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps } from '@mui/material';

interface AppBarProps extends MuiAppBarProps {}

export const AppBar: React.FC<AppBarProps> = (props) => {
  return <MuiAppBar {...props} />;
};
