import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodCreatePageRoutingModule } from './food-create-routing.module';

import { FoodCreatePage } from './food-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodCreatePageRoutingModule
  ],
  declarations: [FoodCreatePage]
})
export class FoodCreatePageModule {}
