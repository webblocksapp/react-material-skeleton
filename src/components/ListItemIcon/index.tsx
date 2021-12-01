import React from 'react';
import { ListItemIcon as MuiListItemIcon, ListItemIconProps as MuiListItemIconProps } from '@mui/material';

interface ListItemIconProps extends MuiListItemIconProps {}

export const ListItemIcon: React.FC<ListItemIconProps> = (props) => {
  return <MuiListItemIcon {...props} />;
};
