import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatisticRoutingModule} from './statistic-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { StatisticComponent } from './statistic.component';

@NgModule({
  imports: [
    CommonModule,
    StatisticRoutingModule,
    SharedModule
  ],
  declarations: [StatisticComponent]
})
export class StatisticModule { }
