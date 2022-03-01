import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tab1Root: any = '';
  tab2Root: any = '';
  tab3Root: any = '';
  myIndex: number;
}