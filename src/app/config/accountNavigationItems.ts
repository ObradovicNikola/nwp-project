import { NavigationItemInterface } from 'src/app/models/layout/NavigationItemInterface';

export const accountNavigationItems: NavigationItemInterface[] = [
  {
    label: 'Sign up',
    url: '/signup',
    className: 'button is-primary has-text-weight-bold',
    icon: 'login',
  },
  {
    label: 'Log in',
    url: '/login',
    className: 'button is-light',
    icon: 'preson',
  },
];
