import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from'@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public collectionName = "users";
  private collectionUser: AngularFirestoreCollection<User>;

  constructor(
    private afs: AngularFirestore,
    public auth: AngularFireAuth
  ) { 
    this.collectionUser = this.afs.collection<User>(this.collectionName);
  }

  public addUser(user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password).then(
      res => {
        return this.afs.collection(this.collectionName).doc(res.user.uid).set(
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
