import { Component, OnInit } from '@angular/core';
import { StringCalculatorService } from './string-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // numbers: string = '';
  // result: number = 0;

  // constructor(private stringCalculatorService: StringCalculatorService) { }

  // ngOnInit(): void {
  // }

  // calculate(): void {
  //   try {
  //     this.result = this.stringCalculatorService.add(this.numbers);
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error appropriately, e.g., display an error message
  //   }
  // }
}
