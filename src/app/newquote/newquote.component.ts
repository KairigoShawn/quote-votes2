import { Component, Input, OnInit } from '@angular/core';
import { Newquote } from '../newquote.model';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {
  @Input() newquote!: Newquote

  vote_up(){
    this.newquote.voteUp()
  }

  vote_down(){
    this.newquote.voteDown()
  }

  ngOnInit(): void {
  }

}
