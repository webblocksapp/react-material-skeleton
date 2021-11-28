import React from 'react';
import { Drawer, DrawerProps, Box } from '@components';

export interface SidebarProps extends DrawerProps {}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <Drawer {...props}>
      <Box width={250}>Hello world</Box>
    </Drawer>
  );
};
Sidebar.defaultProps = {
  anchor: 'left',
};
