import React from 'react';
import { Box, BoxProps, TreeMenu } from '@components';
import { TreeMenu as TreeMenuType } from '@app-types';

export interface SidebarProps extends BoxProps {
  menu: TreeMenuType[];
  open: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ menu, ...props }) => {
  return (
    <Box {...props}>
      <TreeMenu menu={menu} />
    </Box>
  );
};
Sidebar.defaultProps = {
  borderRight: '1px solid #d9d9d9',
};
