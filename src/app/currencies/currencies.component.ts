import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';
import { TableService } from '../services/table.service';

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
  public currencyInfo;

  constructor(private apiService: APIService, private activeRoute: ActivatedRoute,
     private _location: Location, public snackBar: MatSnackBar, private tableService: TableService) { }

  ngOnInit(): void {
    this.getSingleTicker(1);
    this.currencyName = this.activeRoute.snapshot.params['currency'];
    this.notes = localStorage.getItem(this.currencyName);
    this.currencyInfo = this.tableService.selectedCurrency;
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
    this.snackBar.open('Note Saved', 'Success', {
      duration: 1000,
    });
    localStorage.setItem(this.currencyName, this.notes);
    console.log('Note Saved');
  }

  onNoteClear(): void {
    this.snackBar.open('Note Removed', 'Success', {
      duration: 1000,
    });
    localStorage.removeItem(this.currencyName);
    console.log('Note Cleared');
  }

  backClicked() {
    this._location.back();
  }
}
