import { TreeMenu } from '@app-types';
import PetsIcon from '@mui/icons-material/Pets';

export const sidebarMenu: TreeMenu[] = [
  {
    id: 1,
    path: 'pokemons',
    text: 'Pokemons',
    open: false,
    icon: <PetsIcon />,
  },
];
