import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberList: number[] = [];
  listToDIsplay: string[] = [];

  constructor() { }
  
  ngOnInit() {  
    for (let i = 0; i < 10; i++) {
      this.numberList.push(Math.round(-1000 + (Math.random() * 2000)));
    }    
    this.numberList.forEach(number => this.numberToJeanLuc(number));
  }

  numberToJeanLuc(number: number) {
    let result: string;
    if (number%3 == 0 && number%5 !== 0) {
      result = "Jean";
    } else if (number%3 !== 0 && number%5 == 0) {
      result = "Luc";
    } else if (number%3 == 0 && number%5 == 0) {
      result = "Jean-Luc";
    } else {
      result = "n";
    }
    this.listToDIsplay.push(result);
    return result;
  }
  
}
