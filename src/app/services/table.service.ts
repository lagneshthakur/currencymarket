import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  _selectedCurrency;
  _filterValue: string;
  constructor(private http: Http) { }
  get selectedCurrency() {
    return this._selectedCurrency;
  }
  set selectedCurrency(selectedCurrency) {
    this._selectedCurrency = selectedCurrency;
  }
  get filterValue() {
    return this._filterValue;
  }
  set filterValue(filterValue: string) {
    this._filterValue = filterValue;
  }
}
