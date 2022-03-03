import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from"@angular/fire/compat/auth";

import { ToastController, LoadingController, NavController } from"@ionic/angular";

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

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
    private afAuth: AngularFireAuth,
    private userService:UserService
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
        await this.afAuth.
        createUserWithEmailAndPassword(user.email, user.password)
        .then(result => {
          console.log("Cadastrado!\n", result);  
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

  onSubmit(form) {
    if(form.valid){
      this.userService.addUser(this.user).then(
        res=>{
          console.log("Cadastrado!\n", res);          
        },
        err=>{
          console.log("Erro:\n", err);
        }
      )
    }
  }

  formValidation() {
    if(!this.user.nome) {
      this.showToast("Digite seu nome");
      return false;
    }
    if(!this.user.email) {
      this.showToast("Digite seu e-mail");
      return false;
    }
    if(!this.user.password) {
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
