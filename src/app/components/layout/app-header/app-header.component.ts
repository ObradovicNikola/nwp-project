import { Component, OnInit } from '@angular/core';
import { accountNavigationItems } from 'src/app/config/accountNavigationItems';
import { navigationItems } from 'src/app/config/navigationItems';
import { NavigationItemInterface } from 'src/app/models/layout/NavigationItemInterface';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.sass'],
})
export class AppHeaderComponent implements OnInit {
  navigationItems: NavigationItemInterface[] = navigationItems;
  accountNavigationItems: NavigationItemInterface[] = accountNavigationItems;

  isDrawerOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleHamburgerMenu(newState: boolean): void {
    this.isDrawerOpen = newState;
  }

  closeDrawer: () => void = () => {
    this.toggleHamburgerMenu(false);
  };
}
