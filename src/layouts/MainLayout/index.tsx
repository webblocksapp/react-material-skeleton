import React from 'react';
import { Box, Header, Sidebar } from '@components';
import { Outlet } from 'react-router-dom';
import { sidebarMenu } from '@constants/sidebarMenu';
import { useSelector } from 'react-redux';
import { useSidebarRepository } from '@repositories';

export const MainLayout: React.FC = () => {
  const sidebarRepository = useSidebarRepository();
  const open = useSelector(sidebarRepository.selectOpen);

  return (
    <Box height="100%" display="grid" gridTemplateRows="auto 1fr">
      <Header />
      <Box height="100%" display="grid" gridTemplateColumns="220px 1fr">
        <Sidebar open={open} menu={sidebarMenu} />
        <Box p={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
