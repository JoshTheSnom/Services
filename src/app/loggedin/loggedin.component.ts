import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Access from '../Access';
import {UserService} from '../services/user.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {

  private logoutURL = 'http://85.160.64.233:3000/session/logout';

  constructor(private http: HttpClient, private userlogout: AuthenticationService) {
  }

  

  clickedButton() {
    this.userlogout.getLogout()
      .subscribe(
        (data: any) => {

          Access.access = '';

          console.log(Access.access);

        }, (error) => {

        }
      );
  }

  ngOnInit() {
  }
}