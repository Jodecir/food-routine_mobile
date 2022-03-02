import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from"@angular/fire/compat/auth";

import { User } from'../models/user.model';

import { ToastController, LoadingController, NavController } from"@ionic/angular";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  user = {} as User;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
  }

  async register(user: User) {
    console.log(user);
    
    if(this.formValidation()) {
      // mostrar loader
      let loader = await this.loadingCtrl.create({
        message: "Por Favor espere..."
      });
      loader.present();

      try {
        // entrar com email e password
        await this.afAuth.
        createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
          console.log(data);
          // redireciona para outra página
          this.navCtrl.navigateRoot("login");
        })
        .catch();
      } 
      catch (e) {this.showToast(e);}
      // dispensar loader
      loader.dismiss();
    }
  }

  formValidation() {
    if(!this.user.email) {
      // mostrar toast message 
      this.showToast("Digite seu e-mail");
      return false;
    }
    if(!this.user.password) {
      // mostrar toast message 
      this.showToast("Digite sua Senha");
      return false;
    }
    return true;
  }

  showToast(mensagem: string) {
    this.toastCtrl.create({message: mensagem,duration: 3000})
    .then(toastData=> toastData.present());
  }

}
