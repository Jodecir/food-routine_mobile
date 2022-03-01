import { Component, OnInit } from '@angular/core';

import { LoadingController, ToastController } from'@ionic/angular';

import { FoodService } from'src/app/services/food.service';
import { Food } from'src/app/interfaces/food';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.page.html',
  styleUrls: ['./food-list.page.scss'],
})
export class FoodListPage implements OnInit {

  public foodList = new Array<Food>();
  private loading:any;
  private produtoSubscription:Subscription;
  
  constructor(
    private loadingCtrl:LoadingController,
    private produtoService:FoodService,
    private toastCtrl:ToastController
  ) {
    this.produtoSubscription = this.produtoService.listaFood().subscribe(data=>{
      this.foodList = data;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.produtoSubscription.unsubscribe();
  }
  
  async presentLoading() { 
    this.loading = await this.loadingCtrl.create({message:'Aguarde...'});
    return this.loading.present();
  }

  async deleteFood(id:string) { 
    try { await this.produtoService.excluirFood(id);
    } catch(error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  async presentToast(message:string) {
    const toast = await this.toastCtrl.create({message,duration:2000});
    toast.present();
  }
}
