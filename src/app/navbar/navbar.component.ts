import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import {Observable} from "rxjs";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService: AuthService) {}

  signOut() {
    this.authService.signOut()
  }

}
