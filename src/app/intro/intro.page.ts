import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
import { AppEventsService } from 'src/providers/app-events/app-events.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {


  public slides = [
    { image: "assets/intro/logo.png", title: "Home Page", icon: "home"},
  ];
  constructor(
    public navCtrl: NavController,
    public shared: SharedDataService,
    public config: ConfigService,
    public appEventsService: AppEventsService, ) {
  }
  openHomePage() {
    this.appEventsService.publish("openHomePage", "");
    this.config.checkingNewSettingsFromServer();
  }
  ionViewDidEnter() {
    this.shared.hideSplashScreen();
  }
  ngOnInit() {
  }

}
