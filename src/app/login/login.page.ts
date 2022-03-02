import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from"@angular/fire/compat/auth";

import { LoadingController, NavController, ToastController , Platform } from"@ionic/angular";

import { User } from'../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User;
  verificar: any;

  constructor(
    private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private platform: Platform
  ) {}

  ngOnInit() {
  }

  ionViewWillLeave() { 
    this.verificar.unsubscribe(); 
  }

  ionViewDidEnter() { 
    this.verificar = this.platform.backButton.subscribe(() => { navigator["app"].exitApp(); }); 
  }

  async login(user: User) {
    if (this.formValidation()) {
      let loading = await this.loadingCtrl.create({ message: "Por Favor Espere..." }); loading.present();
      try {
        await this.afAuth .signInWithEmailAndPassword(user.email, user.password) .then(data => { console.log(data); this.navCtrl.navigateRoot("home"); }) .catch();
      } 
      catch (e) { this.showToast(e); } loading.dismiss();
    }
  }

  formValidation() { 
    if (!this.user.email) { 
      this.showToast("Digite seu e-mail"); return false; 
    }
    if (!this.user.password) { 
      this.showToast("Digite sua senha"); return false; 
    }
    return true;
  }
  
  showToast(mensagem: string) { 
    this.toastCtrl .create({ message: mensagem, duration: 3000 }).then(toastData => toastData.present()); 
  }

}
