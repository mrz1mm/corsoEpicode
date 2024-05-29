import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AudioService } from './services/audio.service';

import { HomeComponent } from './pages/home/home.component';
import { CarBrandsComponent } from './pages/car-brands/car-brands.component';
import { DetailsComponent } from './pages/details/details.component';
import { Page404Component } from './pages/page404/page404.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarBrandsComponent,
    DetailsComponent,
    Page404Component,
    HeaderComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AudioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
