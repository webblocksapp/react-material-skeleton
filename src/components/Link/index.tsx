import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Typography } from '@components';

export interface LinkProps extends RouterLinkProps {}

export const Link: React.FC<LinkProps> = ({ children, color, ...props }) => {
  return (
    <RouterLink {...props} color={color}>
      <Typography style={{ color, textDecoration: 'none' }} component="span" variant="body1">
        {children}
      </Typography>
    </RouterLink>
  );
};
Link.defaultProps = {
  style: {
    textDecoration: 'none',
    marginRight: 20,
  },
};
