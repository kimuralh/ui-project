import { Component, OnInit } from '@angular/core';
import { ResumeCard } from '../../components/resume-card/resume-card.model'
import { ImagemGaleria } from 'src/app/components/gallery/imagem-galeria.model';

@Component({
  selector: 'game-main-page-layout',
  templateUrl: './main-page-layout.component.html',
  styleUrls: ['./main-page-layout.component.scss']
})
export class MainPageLayoutComponent implements OnInit {

  resumeCards : ResumeCard[] = [
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/2370498-genesis_desertstrike_2__1_.jpg', cardText:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy.'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/621001-1056454795_00.gif', cardText:'Texto 2'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/706919-chessmaster_2000.jpg', cardText:'Texto 3'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/706919-chessmaster_2000.jpg', cardText:'Texto 3'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/706919-chessmaster_2000.jpg', cardText:'Texto 3'}
    /*
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/706919-chessmaster_2000.jpg', cardText:'Texto 3'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/706919-chessmaster_2000.jpg', cardText:'Texto 3'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/706919-chessmaster_2000.jpg', cardText:'Texto 3'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/706919-chessmaster_2000.jpg', cardText:'Texto 3'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/706919-chessmaster_2000.jpg', cardText:'Texto 3'}
    */
  ]

  descriptionCards : ResumeCard[] = [
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/2370498-genesis_desertstrike_2__1_.jpg', cardText:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy.'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/621001-1056454795_00.gif', cardText:'Texto 2'},
  ]

  imagens : ImagemGaleria[] = [
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'} 
  ]
  //cards = [this.card1,this.card2,this.card3]


  
  constructor() { }

  ngOnInit() {
 
  }

}
