import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { BeerService } from './services/beer.service';
import { DatabaseService } from './services/database.service';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [BeerService, DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
