import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgxCarouselStore} from 'ngx-carousel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [
    './landing.component.scss',
    '../../../assets/landing/css/style.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  carouselBanner: any;
  carouselClients: any;
  openMe = false;
  constructor() {
  }

  ngOnInit() {
    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      loop: true,
      touch: true,
      easing: 'ease',
      animation: 'lazy'
    };
    this.carouselClients = {
      grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
      speed: 600,
      interval: 3000,
      point: {
        visible: false
      },
      loop: true,
      touch: true,
      easing: 'ease',
      animation: 'lazy'
    };
  }

  afterCarouselViewedFn(data) {
    // console.log(data);
  }

  onmoveFn(data: NgxCarouselStore) {
    // console.log(data);
  }

}
