import React from 'react';
import { AppBar, IconButton, Toolbar } from '@components';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useSidebarRepository } from '@repositories';

export const Header: React.FC = () => {
  const sidebarRepository = useSidebarRepository();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={sidebarRepository.open}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
