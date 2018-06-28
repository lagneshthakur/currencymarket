import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesCustomComponent implements OnInit {
  public ticker;
  public currencyName: string;
  public loading: boolean;
  public notes: string;

  constructor(private apiService: APIService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSingleTicker(1);
    this.currencyName = this.activeRoute.snapshot.params['currency'];
    this.notes = localStorage.getItem(this.currencyName);
    console.log(this.activeRoute.snapshot.params['currency']);
  }

  getSingleTicker(tickerId): void {
    // this.loading = true;
    this.apiService.getSingleTicker(tickerId).subscribe(response => {
      this.ticker = JSON.parse(response['_body'].data);
      this.loading = false;
    });
  }

  onNoteSave(): void {
    localStorage.setItem(this.currencyName, this.notes);
    console.log('Note Saved');
  }

  onNoteClear(): void {
    localStorage.removeItem(this.currencyName);
    console.log('Note Cleared');
  }
}
