import { SidebarState } from '@app-types';

export const open = (flag: boolean, state: SidebarState) => {
  return { ...state, open: flag };
};

export const close = (flag: boolean, state: SidebarState) => {
  return { ...state, open: flag };
};
