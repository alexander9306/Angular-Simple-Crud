import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { SpeakersComponent } from './speakers/speakers.component';

import {
  NotFoundComponent,
} from './not-found/not-found.component';

// ROUTES
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cars',
        component: CarsComponent,
      },
      {
        path: 'shirts',
        component: ShirtsComponent,
      },
      {
        path: 'speakers',
        component: SpeakersComponent,
      },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '/404' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

