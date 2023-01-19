import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatIconModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
