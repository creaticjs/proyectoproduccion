import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private autService: AngularFireAuth) {}
  loginFacebook () {
    const provedor = new firebase.auth.FacebookAuthProvider();
    return this.autService.auth.signInWithPopup(provedor);
  }

  loginGoogle () {
    const provedor = new firebase.auth.GoogleAuthProvider();
    return this.autService.auth.signInWithPopup(provedor);
  }

  getStatus() {
    return this.autService.authState;
  }
  logout() {
    return this.autService.auth.signOut();
  }

  registrarMDB(user: any) {
    return this.http.post('http://localhost:3000/login/register', user);
  }
}
