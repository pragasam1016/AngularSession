import { RouterModule, Routes } from "@angular/router";
import { SalarydetailsComponent } from "./salarydetails/salarydetails.component";
import { Component, NgModule } from "@angular/core";
import { PfComponent } from "./pf/pf.component";

const router: Routes = [
    { path: '', component: SalarydetailsComponent },
    { path: 'salarydetails', component: SalarydetailsComponent },
    {path:'pf', component: PfComponent}
];

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})

export class SalaryRoutingModule { }