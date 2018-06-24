import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private _jwt;
  loginAPI = 'http://localhost:8090/Code/security';

  constructor(private http: Http, private _router: Router) {
    this._jwt = new JwtHelperService();
   }

  registerUser(userDetail) {
    return this.http.post(this.loginAPI + '/register' , userDetail);
  }

  login(userCredentials) {
    debugger
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    const formData = 'username=' + userCredentials.username + '&password=' + userCredentials.password;
    return this.http.post(this.loginAPI + '/login', formData, options);
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/']);
    console.log('logged out successfully!');
  }

  isLoggedIn() {
    return this._jwt.isTokenExpired(localStorage.getItem('token'));
    // let jwtHelper = new JwtHelper();
    // let token = localStorage.getItem('token');
    // if(!token){
    //   return false;
    // }
    // let expirationDate = jwtHelper.getTokenExpirationDate(token);
    // let isExpired = jwtHelper.isTokenExpired(token);

    // console.log("Expiration :", expirationDate);
    // console.log("Expired :", isExpired);
    // return !isExpired;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return this._jwt.decodeToken(token);
  }
}
