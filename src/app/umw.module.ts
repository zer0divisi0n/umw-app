import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UmwRoutingModule } from './umw-routing.module';
import { UmwComponent } from './umw.component';

@NgModule({
  declarations: [
    UmwComponent
  ],
  imports: [
    BrowserModule,
    UmwRoutingModule
  ],
  providers: [],
  bootstrap: [UmwComponent]
})
export class UmwModule { }
