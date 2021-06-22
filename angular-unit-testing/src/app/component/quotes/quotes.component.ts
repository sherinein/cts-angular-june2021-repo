import { Component, OnInit } from '@angular/core';
import { QuoteModel } from 'src/app/model/quote-model';
import { QuotesService } from 'src/app/service/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public quoteList: QuoteModel[];
  public fetchedList: QuoteModel[];
  public quoteText: String = null;

  constructor(private service: QuotesService) {}

  ngOnInit() {
    this.quoteList = this.service.getQuote();
    this.service.fetchQuotesFromServer().then((data: QuoteModel[]) => {
      this.fetchedList = data;
    });
  }

  createNewQuote() {
    this.service.addNewQuote(this.quoteText);
    this.quoteText = null;
  }

  removeQuote(index) {
    this.service.removeQuote(index);
  }

}
