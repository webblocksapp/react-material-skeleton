import { ReactNode } from 'react';

export type TreeMenu = {
  id: number;
  path: string;
  text: string;
  icon: ReactNode;
  open?: boolean;
  children?: TreeMenu[];
};
