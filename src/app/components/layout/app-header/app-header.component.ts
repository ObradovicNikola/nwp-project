import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { accountNavigationItems } from 'src/app/config/accountNavigationItems';
import { navigationItems } from 'src/app/config/navigationItems';
import { NavigationItemInterface } from 'src/app/models/layout/NavigationItemInterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.sass'],
})
export class AppHeaderComponent implements OnInit {
  navigationItems: NavigationItemInterface[] = navigationItems;
  accountNavigationItems: NavigationItemInterface[] = accountNavigationItems;

  isDrawerOpen: boolean = false;

  constructor(private userService: UserService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get username(): string {
    return this.userService.username;
  }

  ngOnInit(): void {}

  toggleHamburgerMenu(newState: boolean): void {
    this.isDrawerOpen = newState;
  }

  closeDrawer: () => void = () => {
    this.toggleHamburgerMenu(false);
  };

  logout(): void {
    this.userService.logout();
  }
}
