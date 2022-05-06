import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { HomeComponent } from './home/home.component';
import { GoldenComponent } from './golden/golden.component';
import { CatComponent } from './cat/cat.component';
import { HuskieComponent } from './huskie/huskie.component';
import { TeamGeneraterComponent } from './team-generater/team-generater.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [AppComponent, HomeComponent, GoldenComponent, CatComponent, HuskieComponent, TeamGeneraterComponent],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
