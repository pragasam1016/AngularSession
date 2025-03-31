import { Routes } from '@angular/router';
import { RightmenuComponent } from './rightmenu/rightmenu.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { authGuard } from './gards/auth.guard';

export const routes: Routes = [
    {path:'',component:AppComponent},
    {path:'right',component:RightmenuComponent},
    {path:'profile',component:ProfileComponent},
    {path :'employee',component : EmployeeComponent},
    {path : 'employeeDetails' , component:EmployeelistComponent, canActivate :[authGuard]},
    {path :'salary',loadChildren :() => import('./salary/salary.module').then(m => m.SalaryModule)},
    {path:'**',component:NotfoundComponent}//404

];
