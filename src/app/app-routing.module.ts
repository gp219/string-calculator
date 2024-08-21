import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringCalculatorComponent } from './string-calculator/string-calculator.component';

const routes: Routes = [
  { path: '', component: StringCalculatorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
