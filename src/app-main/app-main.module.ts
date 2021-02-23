// commons
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// components
import { AppMainComponent } from './app-main.component';

@NgModule({
  declarations: [
    AppMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppMainComponent]
})
export class AppMainModule {}
