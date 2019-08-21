import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'game-advertise-bar',
  templateUrl: './advertise-bar.component.html',
  styleUrls: ['./advertise-bar.component.scss']
})
export class AdvertiseBarComponent implements OnInit {
  advertise = {
      textAdv: 'Não se esqueça de se inscrever na nossa newsletter!',
      textBtn: 'Clique Aqui'
  }
  //@Input() isVisible : boolean
  
  /*
  @HostListener("window:scroll",['$event'])
  scrollHandler(event){
    console.log(event);
    console.log("scrollado");
  }
  */
  
  // no lugar de {root:null} poderia ser {root: document.querySelector...} indicando o elemento pai que sera o root com o qual
  // havera comparacao
  // nesse formato atual, como padrão iremos comparar o observado com a viewport
  // threshold pode ir de 0 à 1 e podem ser colocados varios no array [0, 0.5, 1]
  // ,rootMargin: "50px 0 50px 0px" é um parametro opcional que serve para detectar a visibilidade do elemento antes dele ficar visivel de fato
  
  //foi testada a abordagem de deixar um *ngIf no componente do advertise bar para ele só ser gerado no momento que o intersection
  //observer verificar que houve intersecção entre os objetos
  //porem o conteudo da função passada para o intersectionobserver nao conseguia interagir com as variaveis externas
  //ex: isVisible = false
  //observer = new IntersectionObserver(...){
  // ...
  // this.isVisible = true
  // }
  // nao era possivel interagir essa variavel com a desejada fora do objeto observer
  // Obs: estudar mais tarde por que não foi possivel
  
  observer = new IntersectionObserver(function(entries) {
    if (entries[0]['isIntersecting'] === true){
      if(entries[0]['intersectionRatio'] === 1){
        entries[0].target.classList.add('visivel');
        this.unobserve(entries[0].target);
        console.log('esta visivel');
      }
      else{
        entries[0].target.classList.remove('visivel');
        console.log('nao esta visivel o suficiente');
      }
    }
    else{
      console.log('elemento nao visivel na tela');
    }
  }, {root:null, threshold:[0,1]})

  constructor() { 
    
  }

  ngOnInit() {
    this.observer.observe(document.querySelector(".advertise-bar-component"));

    // chamando varios observe para o mesmo observer é possivel
  }

}
