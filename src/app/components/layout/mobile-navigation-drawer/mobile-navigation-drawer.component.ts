import { Component, Input, OnInit } from '@angular/core';
import { accountNavigationItems } from 'src/app/config/accountNavigationItems';
import { navigationItems } from 'src/app/config/navigationItems';
import { NavigationItemInterface } from 'src/app/models/layout/NavigationItemInterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mobile-navigation-drawer',
  templateUrl: './mobile-navigation-drawer.component.html',
  styleUrls: ['./mobile-navigation-drawer.component.sass'],
})
export class MobileNavigationDrawerComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() closeDrawer!: () => void;

  navigationItems: NavigationItemInterface[] = navigationItems;
  accountNavigationItems: NavigationItemInterface[] = accountNavigationItems;

  constructor(private userService: UserService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get username(): string {
    return this.userService.username;
  }

  ngOnInit(): void {}

  handleCloseDrawer(e: Event): void {
    e.stopPropagation();
    this.closeDrawer();
  }

  stopPropagation(e: Event): void {
    e.stopPropagation();
  }

  logout(): void {
    this.userService.logout();
  }
}
