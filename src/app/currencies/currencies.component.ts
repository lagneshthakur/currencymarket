import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesCustomComponent implements OnInit {
  public ticker;
  public loading: boolean;

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.getSingleTicker(1);
  }

  getSingleTicker(tickerId): void {
    this.loading = true;
    debugger
    this.apiService.getSingleTicker(tickerId).subscribe(response => {
      debugger
      this.ticker = JSON.parse(response['_body'].data);
      this.loading = false;
    });
  }
}
