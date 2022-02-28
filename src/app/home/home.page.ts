import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public nome_nutricionista:string = "Nutricionista"
  public aviso_nutricionista:string = "Não deixe de comer as frutas, legumes e verduras."
  
  constructor() { }

  ngOnInit() {
  }

}
