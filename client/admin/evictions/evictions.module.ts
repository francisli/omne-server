import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../../shared/components';
import { SharedPipesModule } from '../../shared/pipes';

import { EvictionsRoutingModule } from './evictions-routing.module';
import { ListEvictionsComponent } from '.';

@NgModule({
  declarations: [
    ListEvictionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    SharedPipesModule,
    EvictionsRoutingModule
  ],
  providers: []
})
export class EvictionsModule {}
