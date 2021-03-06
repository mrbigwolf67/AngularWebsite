import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from '../app-layout/site-layout/site-layout.component';
import { HomeComponent } from '../home/home.component';
import { AppLayoutComponent } from '../app-layout/app-layout/app-layout.component';
import { ShoppingComponent } from '../websites/shopping/shopping.component';
import { LandingPageComponent } from '../websites/landing-page/landing-page.component';
import { ShoppingDetailsComponent } from '../websites/shopping/shopping-details/shopping-details.component';

const routes: Routes = [
  // Site routes goes here
  { path: '',  component: SiteLayoutComponent ,
     children:  [
       { path: '', component: HomeComponent, pathMatch: 'full'}
     ] },
      // App routes goes here here
     {
       path: '', component: AppLayoutComponent,
        children: [
          {
            path: 'shopping', component: ShoppingComponent, data: { animation: 'articles'},
              children: [
                {
                  path: ':id', component: ShoppingDetailsComponent, data: { animation: 'article'}
                },
              ]
          },
          {
            path: 'landing', component: LandingPageComponent
          }
          // {
          //   path: 'coming-soon', component: ComingSoonComponent
          // },
          // {
          //   path: 'dashboard', component: DashboardComponent
          // },
          // {
          //   path: 'webgrid', component: WebgridComponent
          // },
          // {
          //   path: 'adventure', component: AdventureComponent
          // },
          // {
          //   path: 'sticky', component: StickyComponent
          // },
          // {
          //   path: 'login', component: LoginComponent
          // },
          // {
          //   path: 'store', component: ShoppingCartComponent
          // }
        ],
     },

     // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule {}
