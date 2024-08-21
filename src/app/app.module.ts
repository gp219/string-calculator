import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringCalculatorComponent } from './string-calculator/string-calculator.component';
import { StringCalculatorService } from './string-calculator.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StringCalculatorComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    StringCalculatorComponent,
    FormsModule
  ],
  providers: [StringCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
