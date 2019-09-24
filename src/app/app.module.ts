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

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    HomeComponent,
    NavbarComponent,
    ShoppingComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:   [NO_ERRORS_SCHEMA]
})
export class AppModule { }
