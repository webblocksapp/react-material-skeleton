import React, { useEffect, useState } from 'react';
import { List, ListProps, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@components';
import { mapRecursive } from '@utils';
import { SidebarMenu as SidebarMenuType } from 'app-types';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PetsIcon from '@mui/icons-material/Pets';

export interface SidebarMenuProps extends ListProps {
  menu?: SidebarMenuType[];
  level?: number;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ level = 1, ...props }) => {
  const [menu, setMenu] = useState<SidebarMenuType[]>(props?.menu || []);
  const [pl, setPl] = useState<number>();

  const open = (id: number) => () => {
    setMenu((prevMenu) =>
      mapRecursive(prevMenu, (item) => {
        if (item.id === id) {
          item.open = !item.open;
        }
        return item;
      })
    );
  };

  useEffect(() => {
    if (level) {
      setPl(2 + level);
    }
  }, [level]);

  return (
    <>
      {menu.map((item, index) => (
        <List key={index}>
          <ListItemButton key={`${index}-${item.id}`} sx={{ pl }} onClick={open(item.id)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {item.children && (item.open ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
          </ListItemButton>
          {item.children && (
            <Collapse in={item.open} timeout="auto" unmountOnExit>
              <SidebarMenu menu={item.children} level={level + 1} component="div" disablePadding />
            </Collapse>
          )}
        </List>
      ))}
    </>
  );
};
SidebarMenu.defaultProps = {
  menu: [
    {
      id: 1,
      path: 'pokemons',
      text: 'Pokemons',
      icon: <PetsIcon />,
      children: [
        {
          id: 2,
          path: 'pokemons',
          text: 'Pokemons',
          icon: <PetsIcon />,
          children: [
            {
              id: 3,
              path: 'pokemons',
              text: 'Pokemons',
              icon: <PetsIcon />,
            },
          ],
        },
      ],
    },
  ],
};
