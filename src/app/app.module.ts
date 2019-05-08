import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDraggableResizerModule } from 'ngx-draggable-resizer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDraggableResizerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
