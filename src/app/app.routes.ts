import { Routes } from '@angular/router';
import { RightmenuComponent } from './rightmenu/rightmenu.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',component:AppComponent},
    {path:'right',component:RightmenuComponent},
    {path:'profile',component:ProfileComponent},
    {path:'**',component:NotfoundComponent}//404
];
