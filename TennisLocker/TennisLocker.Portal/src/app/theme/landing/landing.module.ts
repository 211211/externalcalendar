import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import {LandingRoutingModule} from './landing-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {NgxCarouselModule} from 'ngx-carousel';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    ScrollToModule.forRoot(),
    NgxCarouselModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
