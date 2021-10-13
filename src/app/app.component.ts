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
      new Newquote('Wizo Tano Nane', 'Kwani ni Kesho?', 3),
      new Newquote('Bob Marley', 'One thing about music, when it hits you, you feel no pain', 2),
      new Newquote('A bitter Kenyan', 'Mtaa acgana tu!', 1),
    ]
  }


add_quote(name: HTMLInputElement, quote: HTMLInputElement){
    this.newquote.push(new Newquote(name.value, quote.value))
    name.value = ''
    quote.value = ''
  }

}
