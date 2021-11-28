import React from 'react';
import { Container, Header, Sidebar } from '@components';
import { Outlet } from 'react-router-dom';
import { useSidebarRepository } from '@repositories';
import { useSelector } from 'react-redux';

export const MainLayout: React.FC = () => {
  const sidebarRepository = useSidebarRepository();
  const isSidebarOpen = useSelector(sidebarRepository.getIsSidebarOpen);

  return (
    <>
      <Header />
      <Container>
        <Sidebar open={isSidebarOpen} onClose={sidebarRepository.close} />
        <Outlet />
      </Container>
    </>
  );
};
