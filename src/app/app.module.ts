import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CarsComponent } from './cars/cars.component';
import { AppRoutingModule } from './app.routes';
import { ShirtsComponent } from './shirts/shirts.component';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    ShirtsComponent,
    SpeakersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GraphQLModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
