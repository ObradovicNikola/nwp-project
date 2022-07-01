import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseDetailsComponent } from './components/expenses/expense-details/expense-details.component';
import { IncomeDetailsComponent } from './components/incomes/income-details/income-details.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { HomeComponent } from './pages/home/home.component';
import { IncomesComponent } from './pages/incomes/incomes.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGardService } from './services/auth-gard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGardService],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'expenses',
    component: ExpensesComponent,
    canActivate: [AuthGardService],
  },
  {
    path: 'expenses/:id',
    component: ExpenseDetailsComponent,
    canActivate: [AuthGardService],
  },
  {
    path: 'incomes',
    component: IncomesComponent,
    canActivate: [AuthGardService],
  },
  {
    path: 'incomes/:id',
    component: IncomeDetailsComponent,
    canActivate: [AuthGardService],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
