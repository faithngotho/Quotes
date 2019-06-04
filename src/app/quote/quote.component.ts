import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})


export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("Faith", "Never say never.", "Florence", 0, 0, new Date(2019,2,2)),
]

toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
deleteQuote(isComplete,index){
  if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
      
      if(toDelete){
          this.quotes.splice(index,1)
      }
  }
}

addNewQuote(quote){
  this.quotes.push(quote);

}

  
  