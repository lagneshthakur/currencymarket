import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  dataAPI = 'https://api.coinmarketcap.com/v2/';
  constructor(private http: Http) { }
  getTicker(currency: String) {
    return this.http.get(this.dataAPI + 'ticker/?limit=20&sort=rank&convert=' + currency);
  }
  getSingleTicker(tickerId) {
    return this.http.get(this.dataAPI + 'ticker/' + tickerId);
  }

}
