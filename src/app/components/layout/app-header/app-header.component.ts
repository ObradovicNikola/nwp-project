import { Component, OnInit } from '@angular/core';
import { accountNavigationItems } from 'src/app/config/accountNavigationItems';
import { navigationItems } from 'src/app/config/navigationItems';
import { NavigationItemInterface } from 'src/models/layout/NavigationItemInterface';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.sass'],
})
export class AppHeaderComponent implements OnInit {
  hamburgerMenuIsOpen: boolean = false;
  navigationItems: NavigationItemInterface[] = navigationItems;
  accountNavigationItems: NavigationItemInterface[] = accountNavigationItems;

  constructor() {}

  ngOnInit(): void {}

  toggleHamburgerMenu(newState: boolean): void {
    this.hamburgerMenuIsOpen = newState;
  }
}
