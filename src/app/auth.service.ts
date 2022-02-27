import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState
  }

  signIn() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  signOut() {
    this.afAuth.signOut();
  }
}
