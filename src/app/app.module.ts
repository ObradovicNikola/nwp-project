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
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { IncomesComponent } from './pages/incomes/incomes.component';
import { SignupComponent } from './pages/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
    LoginComponent,
    MobileNavigationDrawerComponent,
    ExpensesComponent,
    IncomesComponent,
    SignupComponent,
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
