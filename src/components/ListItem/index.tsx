import React from 'react';
import { ListItem as MuiListItem, ListItemProps as MuiListItemProps } from '@mui/material';

interface ListItemProps extends MuiListItemProps {
  button?: false;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  return <MuiListItem {...props} />;
};
