import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './app-layout/site-layout/site-layout.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingComponent } from './websites/shopping/shopping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './websites/landing-page/landing-page.component';
import { ShoppingDetailsComponent } from './websites/shopping/shopping-details/shopping-details.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { MyWorkComponent } from './home/my-work/my-work.component';
import { WorkSliderComponent } from './home/work-slider/work-slider.component';
import { CardComponent } from './home/card/card.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    HomeComponent,
    NavbarComponent,
    ShoppingComponent,
    LandingPageComponent,
    ShoppingDetailsComponent,
    HomeFooterComponent,
    MyWorkComponent,
    WorkSliderComponent,
    CardComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:   [NO_ERRORS_SCHEMA]
})
export class AppModule { }
