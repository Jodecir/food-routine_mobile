import { Component, OnInit } from '@angular/core';

import { LoadingController, NavController, ToastController } from'@ionic/angular';

import { PostService } from'src/app/services/post.service';
import { Post } from'src/app/interfaces/post';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public postList = new Array<Post>();
  private loading:any;
  private postSubscription:Subscription;

  constructor(
    private loadingCtrl:LoadingController,
    private navCtrl: NavController,
    private postService:PostService,
    private toastCtrl:ToastController
  ) { 
    this.postSubscription = this.postService.listaPost().subscribe(data=>{
      this.postList = data;
    });
  }

  ngOnInit() {
  }

  async presentLoading() { 
    this.loading = await this.loadingCtrl.create({message:'Aguarde...'});
    return this.loading.present();
  }

  async logout() { 
    this.navCtrl.navigateRoot("login");
  }

}
