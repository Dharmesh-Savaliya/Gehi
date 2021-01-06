import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailesComponent } from './views/detailes/detailes.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { EmployerComponent } from './views/employer/employer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee',
    pathMatch:'full'
  }, 
  {
    path: 'employee',
    component: EmployeeComponent,
    pathMatch:'full'
  },
  {
    path: 'employer',
    component: EmployerComponent,
    pathMatch:'full'
  },
  {
    path: 'detailsView',
    component: DetailesComponent,
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo:'employee'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
