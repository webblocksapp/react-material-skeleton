import { ReactNode } from 'react';

export type SidebarMenu = {
  id: number;
  path: string;
  text: string;
  icon: ReactNode;
  open?: boolean;
  children?: SidebarMenu[];
};
