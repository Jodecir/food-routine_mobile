import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';

import { NavController, LoadingController, ToastController } from'@ionic/angular';

import { FoodService } from'src/app/services/food.service';
import { Food } from'src/app/interfaces/food';

import { Subscription } from'rxjs';

@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.page.html',
  styleUrls: ['./food-create.page.scss'],
})
export class FoodCreatePage implements OnInit {

  public food: Food = {};
  private foodId: string = null;
  private carregar: any;
  private foodSubscription: Subscription;

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.foodId = this.activatedRoute.snapshot.params['id']; 
    // mostrar o food através da rota do id
    if(this.foodId) this.carregarFood();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.foodSubscription)this.foodSubscription.unsubscribe();
  }
  
  carregarFood() {
    this.foodSubscription = this.foodService.mostraFood(this.foodId)
    .subscribe(data=>{this.food=data});
  }
  
  async salvarFood() {
    await this.presentLoading();
    if(this.foodId) {
      try {
        await this.foodService.editarFood(this.foodId,this.food);
        await this.carregar.dismiss();
        this.navCtrl.navigateBack('/home');
      } catch(error) {
        this.presentToast('Erro ao tentar salvar');
        this.carregar.dismiss();
      }
    } else { this.food.dt_registro = new Date().getTime();
      try {
        await this.foodService.addFood(this.food);
        await this.carregar.dismiss();
        this.navCtrl.navigateBack('/food-list');
      } catch(error) { 
        this.presentToast('Erro ao tentar salvar');
        this.carregar.dismiss();
      }
    }
  }
  
  async presentLoading() {
    this.carregar = await this.loadingCtrl.create({message:'Aguarde...'});
    return this.carregar.present();
  }

  async presentToast(message:string) {
    const toast = await this.toastCtrl.create({message,duration:2000});
    toast.present();
  }

}
