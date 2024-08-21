import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StringCalculatorService } from '../string-calculator.service';

@Component({
  selector: 'app-string-calculator-component',
  templateUrl: './string-calculator.component.html',
  styleUrls: ['./string-calculator.component.scss']
})
export class StringCalculatorComponent implements OnInit {
  @ViewChild('numberInput') numberInput!: ElementRef;
  result: number = 0;
  errorMessage: string | any = '';

  constructor(private stringCalculatorService: StringCalculatorService) { }

  ngOnInit(): void {
  }

  calculate(): void {
    const numbers = this.numberInput.nativeElement.value;
    try {
      this.result = this.stringCalculatorService.add(numbers);
      this.errorMessage = "";
    } catch (error) {
      console.log(error);
      this.errorMessage = error;
    }
  }
}
