import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateComponent } from './calculate/calculate.component';
import { SalehistoryComponent } from './salehistory/salehistory.component';

const routes: Routes = [
  { path: 'calculate', component: CalculateComponent },
  { path: 'salehistory', component: SalehistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


