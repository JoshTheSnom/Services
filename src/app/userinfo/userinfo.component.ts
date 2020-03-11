import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Access from '../Access';
import {UserService} from '../services/user.service';
import {Authentication} from '../models/Authentication.model';
import {User} from '../models/User.model';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  public username = '';
  public email = '';
  private getInfoURL = 'http://85.160.64.233:3000/user';

  constructor(private http: HttpClient, private router: Router, private http2: HttpClient, private user: UserService, private auth: AuthenticationService, private userlogout: AuthenticationService) {

  }
  clickedButton() {
    console.log(AuthenticationService.token);

    this.user.getUser()
      .subscribe(
      (data: User) => {
        this.email = data.email
        this.username = data.username;

        console.log(this.email);
        console.log(this.username);
       }, (error) => {

      }
    );
  }

  logoutClick() {
    this.userlogout.getLogout()
      .subscribe(
        (data: User) => {
          AuthenticationService.token.access_token = '';
          console.log(AuthenticationService.token.access_token);
          }, (error) => {

        }
      );
  }

  ngOnInit() {
  }

}
