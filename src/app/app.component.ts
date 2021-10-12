import { Component } from '@angular/core';
import { Newquote } from './newquote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newquote: Newquote[]


  constructor() {
    this.newquote = [
      new Newquote('Angular', 'http://angular.io', 3),
      new Newquote('Fullstack', 'http://fullstack.io', 2),
      new Newquote('Angular homepage', 'http://angular.io', 1),
    ]
  }


add_quote(name: HTMLInputElement, quote: HTMLInputElement){
    this.newquote.push(new Newquote(name.value, quote.value))
    name.value = ''
    quote.value = ''
  }

}
