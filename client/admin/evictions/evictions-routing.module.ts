import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListEvictionsComponent } from '.';

const appRoutes: Routes = [
  {
    path: 'evictions',
    component: ListEvictionsComponent
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
export class EvictionsRoutingModule {}
