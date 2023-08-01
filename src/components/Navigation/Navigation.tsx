import { FC } from 'react';
import { NavigationLink } from '../NavigationLink/NavigationLink';

export const Navigation: FC = () => {
  return (
    <nav>
      <NavigationLink to={'/homepage'} title={'Home'} />
      <NavigationLink to={'/profile'} title={'Profile'} />
      <NavigationLink to={'/shelter'} title={'Shelter'} />
    </nav>
  );
};
