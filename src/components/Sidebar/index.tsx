import React from 'react';
import { Box, Drawer, DrawerProps, TreeMenu } from '@components';
import { TreeMenu as TreeMenuType } from '@app-types';

export interface SidebarProps extends DrawerProps {
  menu: TreeMenuType[];
}

export const Sidebar: React.FC<SidebarProps> = ({ menu, ...props }) => {
  return (
    <Drawer {...props}>
      <Box width={250}>
        <TreeMenu menu={menu} />
      </Box>
    </Drawer>
  );
};
Sidebar.defaultProps = {
  anchor: 'left',
};
