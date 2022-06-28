import { NavigationItemInterface } from 'src/models/layout/NavigationItemInterface';

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
    label: 'Expense Groups',
    url: '/expense-groups',
    icon: 'IndeterminateCheckBox',
  },
  {
    label: 'Incomes',
    url: '/incomes',
    icon: 'Add',
  },
  {
    label: 'Income Groups',
    url: '/income-groups',
    icon: 'AddBox',
  },
];
