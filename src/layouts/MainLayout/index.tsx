import React from 'react';
import { Container, Header, Sidebar } from '@components';
import { Outlet } from 'react-router-dom';
import { sidebarMenu } from '@constants/sidebarMenu';
import { useSelector } from 'react-redux';
import { useSidebarRepository } from '@repositories';

export const MainLayout: React.FC = () => {
  const sidebarRepository = useSidebarRepository();
  const open = useSelector(sidebarRepository.selectOpen);

  return (
    <>
      <Header />
      <Container>
        <Sidebar open={open} menu={sidebarMenu} onClose={sidebarRepository.close} />
        <Outlet />
      </Container>
    </>
  );
};
