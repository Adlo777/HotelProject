import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import {FormsModule} from '@angular/forms';//Pour le NgModel
/*Pour pouvoir avoir un pipe en Français*/
import { registerLocaleData } from '@angular/common';
import localeFr  from '@angular/common/locales/fr';
import { ReplaceComma } from './shared/pipes/replace-comma.pipe';
import { StarRatingComponent } from './shared/pipes/components/star-rating/star-rating.component';

registerLocaleData(localeFr,'fr');
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StarRatingComponent
  ],
  imports: [
  
  BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
