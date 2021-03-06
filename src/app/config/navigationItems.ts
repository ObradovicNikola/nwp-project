import { NavigationItemInterface } from 'src/app/models/layout/NavigationItemInterface';

export const navigationItems: NavigationItemInterface[] = [
  {
    label: 'Home',
    url: '/',
    icon: 'home',
  },
  {
    label: 'Expenses',
    url: '/expenses',
    icon: 'remove',
  },
  {
    label: 'Incomes',
    url: '/incomes',
    icon: 'Add',
  },
];
