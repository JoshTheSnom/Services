import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Access from '../Access';
import {AuthenticationService} from '../services/authentication.service';
import {Authentication} from '../models/Authentication.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public password = '';
  public email = '';
  private loginURL = 'http://85.160.64.233:3000/session/login';

  constructor(private http: HttpClient, private router: Router, private authentication: AuthenticationService) {
  }

  clickedButton() {
    this.authentication.getLogin(this.email, this.password).subscribe(
      (data: Authentication) => {

          this.authentication.setToken(data);
          console.log(data);
          this.router.navigate(['/loggedin']);
      }, (error) => {

      }
    );
  }

  ngOnInit() {
  }


}