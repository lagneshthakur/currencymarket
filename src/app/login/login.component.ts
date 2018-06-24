import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLinear = true;
  invalidLogin = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,
              private _service: AuthService,
              private _router: Router,
              private route: ActivatedRoute
            ) { }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', [Validators.required]]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  submit() {
    this.invalidLogin = false;
    const username: string = this.firstFormGroup.controls.firstCtrl.value;
    const password: string = this.secondFormGroup.controls.secondCtrl.value;
    this._service.login({'username': username, 'password': password})
    .subscribe(response => {
      if (response['_body'].includes('error')){
        alert('Error occured');
        this.invalidLogin = true;
        return;
      }
      if (response.status) {
        console.log(response.json());
        const responseJSON = JSON.parse(response['_body']);
        localStorage.setItem('token', responseJSON.token);
        console.log('logged in successfully!');
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this._router.navigate([returnUrl || '/']);
      }
    },
    error => {
      alert('Error occured');
    });
  }
}
