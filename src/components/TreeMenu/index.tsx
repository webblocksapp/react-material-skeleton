import React, { useState, useEffect } from 'react';
import { List, ListProps, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@components';
import { mapRecursive } from '@utils';
import { TreeMenu as TreeMenuType } from 'app-types';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

export interface TreeMenuProps extends ListProps {
  menu: TreeMenuType[];
  level?: number;
}

export const TreeMenu: React.FC<TreeMenuProps> = ({ level = 1, menu: menuProp, ...props }) => {
  const [menu, setMenu] = useState<TreeMenuType[]>(menuProp || []);
  const [paddingLeft, setPaddingLeft] = useState<number>();
  const navigate = useNavigate();

  const open = (id: number, path?: string) => () => {
    setMenu((prevMenu) =>
      mapRecursive(prevMenu, (item) => {
        if (item.id === id) {
          return { ...item, open: !item.open };
        }
        return item;
      })
    );

    path && navigate(path);
  };

  useEffect(() => {
    if (level) {
      setPaddingLeft(1 + level);
    }
  }, [level]);

  return (
    <List {...props}>
      {menu.map((item, index) => (
        <React.Fragment key={`${index}-${item.id}`}>
          <ListItemButton sx={{ paddingLeft }} onClick={open(item.id, item?.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {item.children && (item.open ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
          </ListItemButton>
          {item.children && (
            <Collapse in={item.open} timeout="auto">
              <TreeMenu menu={item.children} level={level + 1} disablePadding />
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
