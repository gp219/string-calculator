import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
  
    // Check for custom delimiter
    const delimiterRegex = /^\/\/(.+)\n(.*)$/;
    const delimiterMatch = numbers.match(delimiterRegex);
    let delimiter = ',';
    if (delimiterMatch) {
      delimiter = delimiterMatch[1];
      numbers = delimiterMatch[2];
    }
  
    // Split numbers by delimiter and newlines
    const numberArray = numbers.split(/[\n,]/);
  
    // Validate negative numbers
    const negativeNumbers = numberArray.filter(num => parseInt(num) < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`);
    }
  
    // Sum positive numbers
    return numberArray.filter(num => parseInt(num) >= 0)
      .map(num => parseInt(num))
      .reduce((sum, num) => sum + num, 0);
  }
}