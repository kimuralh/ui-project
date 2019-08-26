import { Component, OnInit } from '@angular/core';
import { ResumeCard } from '../../components/resume-card/resume-card.model'
import { ImagemGaleria } from 'src/app/components/gallery/imagem-galeria.model';

@Component({
  selector: 'game-main-page-layout',
  templateUrl: './main-page-layout.component.html',
  styleUrls: ['./main-page-layout.component.scss']
})
export class MainPageLayoutComponent implements OnInit {
  //https://www.giantbomb.com/api/search/?api_key=0325079601bfa0c8b81f5622e1f35d57a9556937&format=json&query=%22kingdom%20hearts%22&resources=game,results
  //{results:[{'description','image:{'medium_url'}'},{},{}]}
  resumeCards : ResumeCard[] = [
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_medium/1897536-box_khearts.png', cardText:"<p>Kingdom Hearts is an action RPG published and developed by <a href=\"/square-co-ltd/3010-6323/\" data-ref-id=\"3010-6323\">Squaresoft</a>, and produced with the cooperation of the Walt Disney Company. The game incorporates many characters from Disney's animated works and several of <a href=\"/square-enix/3010-104/\" data-ref-id=\"3010-104\">Square Enix's</a> <a href=\"/final-fantasy/3025-194/\" data-ref-id=\"3025-194\">Final Fantasy</a> games. Kingdom Hearts sold 5.6 million copies worldwide (It was Square's highest selling PS2 game in North America) and was critically acclaimed for incorporating the two distinct worlds of Disney and Final Fantasy into one entertaining game.</p>"},
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
