import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import {Quote} from '../quote'


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  upvote = 0;
  downvote = 0;
  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  like(){
    this.quote.upvote ++;
  }

  dislike(){
    this.quote.downvote ++;
  }
  constructor() { }

  ngOnInit() {
  }

}


