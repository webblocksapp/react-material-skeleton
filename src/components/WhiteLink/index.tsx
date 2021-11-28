import React from 'react';
import { Link, LinkProps } from '@components';

export const WhiteLink: React.FC<LinkProps> = (props) => {
  return <Link {...props} />;
};
WhiteLink.defaultProps = {
  color: 'white',
};
