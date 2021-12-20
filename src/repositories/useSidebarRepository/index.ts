import { Dispatch } from 'react';
import { SidebarAction, RootState } from '@app-types';
import { useDispatch } from 'react-redux';

export const useSidebarRepository = () => {
  const dispatch = useDispatch<Dispatch<SidebarAction>>();

  const open = () => {
    dispatch({ type: 'SIDEBAR:OPEN', flag: true });
  };

  const close = () => {
    dispatch({ type: 'SIDEBAR:CLOSE', flag: false });
  };

  const selectOpen = (state: RootState) => state.sidebarState.open;

  return { open, close, selectOpen };
};
