import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import {FormsModule} from '@angular/forms';//Pour le NgModel
/*Pour pouvoir avoir un pipe en Français*/
import { registerLocaleData } from '@angular/common';
import localeFr  from '@angular/common/locales/fr';

registerLocaleData(localeFr,'fr');
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent
  ],
  imports: [
  
  BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
