import { Component, OnInit } from '@angular/core';
import { NumberType } from 'src/app/models/dropdown.model';

@Component({
  selector: 'prime-fibonacci',
  templateUrl: './prime-fibonacci.component.html',
  styleUrls: ['./prime-fibonacci.component.scss']
})
export class PrimeFibonacciComponent implements OnInit {

  resultText : string;

  inputNumber: number;

  dropDownData: string[];

  primeOrFibonacci: string;

  constructor() { 
    this.resultText = ''
    this.inputNumber = 0
    this.dropDownData = [ NumberType.Prime, NumberType.Fibonacci]
    this.primeOrFibonacci = this.dropDownData[0]
  }

  ngOnInit(): void {}

  onDropdownChange() : void {
    this.onPrimeOrFibonacci()
  }

  onKeyUp() : void {
    this.onPrimeOrFibonacci()
  }

  isPrime (num : number) : boolean {
    if (num < 2) return false;

    const q = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= q; i++) {
      if (num % i == 0){
        return false;
      }
    }
    return true;
  }

  isFibonacci(num: number): boolean {
    const a = (5 * Math.pow(num, 2) + 4);
    const b = (5 * Math.pow(num, 2) - 4);
    const resultA = Math.sqrt(a) % 1 == 0;
    const resultB = Math.sqrt(b) % 1 == 0;

    if (resultA || resultB) {
      return true;
    } else {
      return false;
    }
  }

  onPrimeOrFibonacci() : void {
    const currentValue = this.inputNumber < 0 ? 1 : Math.round(this.inputNumber)

    if(this.primeOrFibonacci === NumberType.Prime) {
      this.resultText = `${this.isPrime(currentValue)}`
    } else if(this.primeOrFibonacci === NumberType.Fibonacci){
      this.resultText = `${this.isFibonacci(currentValue)}`
    }
  }
}
