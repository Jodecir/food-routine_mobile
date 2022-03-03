import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from"@angular/fire/compat/auth";

import { User } from'../models/user';

import { ToastController, LoadingController, NavController } from"@ionic/angular";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public user = {} as User;
  public confirmationPsw = "";

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
  }

  async register(user: User) {
    if(this.formValidation()) {
      let loading = await this.loadingCtrl.create({
        message: "Por Favor espere..."
      });
      loading.present();

      try {
        // entrar com email e password
        await this.afAuth.
        createUserWithEmailAndPassword(user.email, user.password)
        .then(result => {
          console.log("Cadastrado!", result);  
          this.navCtrl.navigateRoot("login");
        },
        error=>{
          console.log("Erro:\n", error);
        })
        .catch();
      } 
      catch (e) {this.showToast(e);}
      loading.dismiss();
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
