import React from 'react';
import { Box, Drawer, DrawerProps, SidebarMenu } from '@components';

export interface SidebarProps extends DrawerProps {}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <Drawer {...props}>
      <Box width={250}>
        <SidebarMenu />
      </Box>
    </Drawer>
  );
};
Sidebar.defaultProps = {
  anchor: 'left',
};
