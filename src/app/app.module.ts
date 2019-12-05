import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LargeComponent } from './large/large.component';


@NgModule({
  declarations: [
    AppComponent,
    LargeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [LargeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
