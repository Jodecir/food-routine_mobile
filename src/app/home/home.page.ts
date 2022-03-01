import { Component, OnInit } from '@angular/core';

import { LoadingController } from'@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public nome_nutricionista:string = "Nutricionista"
  public aviso_nutricionista:string = "Não deixe de comer as frutas, legumes e verduras."
  private loading:any;

  constructor(
    private loadingCtrl:LoadingController,
  ) { }

  ngOnInit() {
  }

  async presentLoading() { 
    this.loading = await this.loadingCtrl.create({message:'Aguarde...'});
    return this.loading.present();
  }

  async logout() { 
    await this.presentLoading();
  }

}
