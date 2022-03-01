import { Injectable } from '@angular/core';
import { AngularFireAuth } from"@angular/fire/compat/auth";

import { User } from'../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
  ) {}
}
