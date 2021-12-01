import React, { ElementType } from 'react';
import { List as MuiList, ListProps as MuiListProps } from '@mui/material';

export interface ListProps extends MuiListProps {
  component?: ElementType<any>;
}

export const List: React.FC<ListProps> = (props) => {
  return <MuiList {...props} />;
};
