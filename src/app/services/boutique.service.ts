import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  dataAPI = 'https://jsonplaceholder.typicode.com';
  constructor(private http: Http) { }

  getBoutiques() {
    // const headers = new Headers({ 'Authorization': 'Bearer eyJuYW1lIjoiQURNSU5VU0VSIiwicm9sZSI6IkFETUlOIiwicm9sZUlkIjoyLCJ1c2VySWQiOjMsImFsZyI6IkhTNTEyIn0.eyJpc3MiOiJodHRwOi8vMTA0LjIxNC4zNy4xNjg6ODA4MC9Db2RlL3NlY3VyaXR5L2xvZ2luIiwiaWF0IjoxNTIzOTU0OTE4LCJleHAiOjE1MjM5NTU4MTh9.5fUQn6b17XrdBU1AibeCFX8Frcf-opMVbtwTOr7y5odrd34LtECTztXLA63cLI78qQtwp6zoprLGDVJwRXtS6w' });
    // const options = new RequestOptions({ headers: headers });
    return this.http.get(this.dataAPI + '/users');
  }

}
