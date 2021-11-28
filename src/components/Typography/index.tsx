import React, { ElementType } from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

export interface TypographyProps extends MuiTypographyProps {
  component?: ElementType<any>;
}

export const Typography: React.FC<TypographyProps> = (props) => {
  return <MuiTypography {...props} />;
};
