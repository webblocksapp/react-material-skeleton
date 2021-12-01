import React from 'react';
import { Collapse as MuiCollapse, CollapseProps as MuiCollapseProps } from '@mui/material';

interface CollapseProps extends MuiCollapseProps {}

export const Collapse: React.FC<CollapseProps> = (props) => {
  return <MuiCollapse {...props} />;
};
