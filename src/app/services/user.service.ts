import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private collection = "users";

  constructor(
    private firedb: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  public addUser(user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password).then(
      res => {
        return this.firedb.collection(this.collection).doc(res.user.uid).set(
          {
            nome: user.nome,
            email: user.email,
            ativo: user.ativo
          }).catch(
            () => this.auth.currentUser.then(
             current => current.delete()
            )
          )
      }
    )
  }
}
