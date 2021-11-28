import { SidebarAction, SidebarState } from '@app-types';
import { open, close } from './handlers';

const initialState: SidebarState = {
  open: false,
};

export const sidebarState = (state: SidebarState = initialState, action: SidebarAction) => {
  switch (action.type) {
    case 'SIDEBAR:OPEN':
      return open(action.flag, state);
    case 'SIDEBAR:CLOSE':
      return close(action.flag, state);
    default:
      return state;
  }
};
