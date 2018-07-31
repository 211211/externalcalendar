import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
/*import {SimpleNotificationsModule} from 'angular2-notifications';*/
import {AgmCoreModule} from '@agm/core';
import { GeneralBoardRoutingModule } from './general-routing.module';
import { GeneralBoardComponent } from './general.component';
 
 

@NgModule({
  imports: [
    CommonModule,
    GeneralBoardRoutingModule,
    SharedModule,
   
  ],
  declarations: [
      GeneralBoardComponent
  ],
    bootstrap: [GeneralBoardComponent] 
})
export class GeneralBoardModule { }
