import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
//Importing modules with routing
//The router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes.
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module'; //Import last because the any wildcard & blank routing is very generic & covers lots of cases (More specific cases are first and handled before route code drops here)

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
