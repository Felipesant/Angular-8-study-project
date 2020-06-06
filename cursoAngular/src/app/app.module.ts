import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponent } from './segundo/segundo.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SegundoComponent,
    NgifNgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
