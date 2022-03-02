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
  private foodSubscription:Subscription;
  
  constructor(
    private loadingCtrl:LoadingController,
    private foodService:FoodService,
    private toastCtrl:ToastController
  ) {
    this.foodSubscription = this.foodService.listaFood().subscribe(data=>{
      this.foodList = data;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.foodSubscription.unsubscribe();
  }
  
  async presentLoading() { 
    this.loading = await this.loadingCtrl.create({message:'Aguarde...'});
    return this.loading.present();
  }

  async deleteFood(id:string) { 
    try { await this.foodService.excluirFood(id);
    } catch(error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  async updateFood(id:string, food: Food) { 
    try { await this.foodService.editarFood(id, food);
    } catch(error) {
      this.presentToast('Erro ao tentar atualizar');
    }
  }

  async presentToast(message:string) {
    const toast = await this.toastCtrl.create({message,duration:2000});
    toast.present();
  }
}