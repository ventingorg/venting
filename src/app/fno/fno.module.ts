import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FnoRoutingModule } from './fno-routing.module';
import { FnoComponent } from './fno.component';

@NgModule({
  declarations: [
    FnoComponent
  ],
  imports: [
    BrowserModule,
    FnoRoutingModule
  ],
  providers: [],
  bootstrap: [FnoComponent]
})

export class AppModule { }
