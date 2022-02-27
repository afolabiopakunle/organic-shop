import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(response =>  console.log(response))
  }

  signOut() {
    this.afAuth.signOut();
  }

}
