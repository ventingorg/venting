import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DwaComponent } from './dwa/dwa.component';
import { FnoComponent } from './fno/fno.component';

@NgModule({
  declarations: [
    AppComponent,
    DwaComponent,
    FnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
