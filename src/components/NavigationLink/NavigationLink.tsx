import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  title: string;
}

export const NavigationLink: FC<Props> = ({ to, title }) => {
  return <NavLink to={to}>{title}</NavLink>;
};
