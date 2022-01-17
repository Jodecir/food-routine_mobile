import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tab1Root: any = 'home';
  tab2Root: any = 'quemSomos';
  tab3Root: any = 'cadastroCliente';
  myIndex: number;
}