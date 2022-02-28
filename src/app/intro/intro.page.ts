import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {
      title: "Welcome",
      description: "Bem vindo ao <b>Food-Routine</b>, você pode montar sua rotina alimentar com o auxílio de um profissional sem perder a flexibilidade.",
      image: "assets/img/slidebox-img-1.png",
    },
    {
      title: "Simple",
      description: "Tudo de forma <b>simples</b> e <b>confortável</b>, alguns cliques e já está feito sua rotina alimentar ideal.",
      image: "assets/img/slidebox-img-2.png",
    },
    {
      title: "Flex",
      description: "Nunca foi tão fácil ser saúdavel de maneira flexível, então oquê você está esperando agora ?",
      image: "assets/img/slidebox-img-3.png",
    }
  ];
}
