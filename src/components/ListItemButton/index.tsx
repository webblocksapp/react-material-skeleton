import React from 'react';
import { ListItemButton as MuiListItemButton, ListItemButtonProps as MuiListItemButtonProps } from '@mui/material';

interface ListItemButtonProps extends MuiListItemButtonProps {}

export const ListItemButton: React.FC<ListItemButtonProps> = (props) => {
  return <MuiListItemButton {...props} />;
};
