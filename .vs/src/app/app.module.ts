import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JewelComponent } from './jewel/jewel.component';
import { JewelryStoreComponent } from './jewelry-store/jewelry-store.component';

@NgModule({
  declarations: [
    AppComponent,
    JewelComponent,
    JewelryStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
