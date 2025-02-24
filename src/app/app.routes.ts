import { Routes } from '@angular/router';
import { RightmenuComponent } from './rightmenu/rightmenu.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    {path:'',component:AppComponent},
    {path:'right',component:RightmenuComponent},
    {path:'profile',component:ProfileComponent},
    {path :'employee',component : EmployeeComponent},
    {path:'**',component:NotfoundComponent}//404

];
