import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../../shared/components';
import { SharedPipesModule } from '../../shared/pipes';

import { BuyoutsRoutingModule } from './buyouts-routing.module';
import { ListBuyoutsComponent } from '.';

@NgModule({
  declarations: [
    ListBuyoutsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    SharedPipesModule,
    BuyoutsRoutingModule
  ],
  providers: []
})
export class BuyoutsModule {}
