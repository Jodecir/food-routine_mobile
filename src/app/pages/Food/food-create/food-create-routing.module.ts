import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodCreatePage } from './food-create.page';

const routes: Routes = [
  {
    path: '',
    component: FoodCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodCreatePageRoutingModule {}
