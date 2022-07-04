import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './components/layout/app-header/app-header.component';
import { AppFooterComponent } from './components/layout/app-footer/app-footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MobileNavigationDrawerComponent } from './components/layout/mobile-navigation-drawer/mobile-navigation-drawer.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { IncomesComponent } from './pages/incomes/incomes.component';
import { SignupComponent } from './pages/signup/signup.component';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { DialogComponent } from './components/common/dialog/dialog.component';
import { TransactionFormComponent } from './components/common/transaction-form/transaction-form.component';
import { NoWhiteSpaceDirective } from './config/form-validators/whitespace.validator';
import { ValidAmountDirective } from './config/form-validators/amount.validator';
import { IncomeDetailsComponent } from './components/incomes/income-details/income-details.component';
import { ExpenseDetailsComponent } from './components/expenses/expense-details/expense-details.component';
import { DataTableComponent } from './components/common/data-table/data-table.component';
import { TotalPieChartComponent } from './components/common/total-pie-chart/total-pie-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LoginFormComponent } from './components/common/login-form/login-form.component';
import { RegisterFormComponent } from './components/common/register-form/register-form.component';
import { PasswordValidatorDirective } from './config/form-validators/password.validator';
import { MySnackbarComponent } from './components/common/my-snackbar/my-snackbar.component';
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
    DialogComponent,
    TransactionFormComponent,
    NoWhiteSpaceDirective,
    ValidAmountDirective,
    PasswordValidatorDirective,
    IncomeDetailsComponent,
    ExpenseDetailsComponent,
    DataTableComponent,
    TotalPieChartComponent,
    LoginFormComponent,
    RegisterFormComponent,
    MySnackbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSnackBarModule,
    NgApexchartsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true,
    },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
