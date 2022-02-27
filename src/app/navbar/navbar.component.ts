import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user!: firebase.User | null | string | undefined;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(response =>  this.user = response?.displayName)
  }

  signOut() {
    this.afAuth.signOut();
  }

}
