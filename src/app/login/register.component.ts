import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  public content = [];

  constructor(

  ) { }

  ngOnInit() {
    this.content['name'] = 'Full Name';
    this.content['email'] = 'E-mail';
  }

}
