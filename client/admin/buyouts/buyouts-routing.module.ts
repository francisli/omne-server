import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListBuyoutsComponent } from '.';

const appRoutes: Routes = [
  {
    path: 'buyouts',
    component: ListBuyoutsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BuyoutsRoutingModule {}
