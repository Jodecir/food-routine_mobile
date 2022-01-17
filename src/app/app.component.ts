import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inbox',
      url: '/explore-container/Inbox',
      icon: 'mail'
    },
    {
      title: 'Trash',
      url: '/explore-container/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/explore-container/Spam',
      icon: 'warning'
    }
  ];
}
