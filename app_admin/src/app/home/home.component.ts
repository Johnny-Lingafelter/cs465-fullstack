import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    if (this.isLoggedIn()) {
      this.router.navigate(['list-trips']);
    }
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}