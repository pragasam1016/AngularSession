import { RouterModule, Routes } from "@angular/router";
import { SalarydetailsComponent } from "./salarydetails/salarydetails.component";
import { NgModule } from "@angular/core";

const router: Routes = [
    { path: '', component: SalarydetailsComponent },
    { path: 'salarydetails', component: SalarydetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})

export class SalaryRoutingModule { }