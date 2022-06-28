import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './components/layout/app-header/app-header.component';
import { AppFooterComponent } from './components/layout/app-footer/app-footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MobileNavigationDrawerComponent } from './components/layout/mobile-navigation-drawer/mobile-navigation-drawer.component';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
    LoginComponent,
    MobileNavigationDrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
