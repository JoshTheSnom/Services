import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Access from '../Access';
import {AuthenticationService} from '../services/authentication.service';
import {Authentication} from '../models/Authentication.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public username = '';
  public password = '';
  public checkpassword = '';
  public email = '';
  private registerURL = 'http://85.160.64.233:3000/session/register';
  private wrong = false;


  constructor(private http: HttpClient, private router: Router, private authentication: AuthenticationService) {

  }



  clickedButton() {
    if (this.password === this.checkpassword) {
      this.authentication.getRegistration(this.username, this.email, this.password, this.checkpassword)
        .subscribe(
          (data: Authentication) => {
            this.router.navigate(['/home']);

          }, (error) => {
            this.wrong = true;
          }
        );
    } else {
      this.wrong = true;
    }
  }

  ngOnInit() {
  }

}