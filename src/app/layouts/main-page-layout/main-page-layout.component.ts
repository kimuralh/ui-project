import { Component, OnInit } from '@angular/core';
import { ResumeCard } from '../../components/resume-card/resume-card.model'
import { ImagemGaleria } from 'src/app/components/gallery/imagem-galeria.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'game-main-page-layout',
  templateUrl: './main-page-layout.component.html',
  styleUrls: ['./main-page-layout.component.scss']
})
export class MainPageLayoutComponent implements OnInit {
  //https://www.giantbomb.com/api/search/?api_key=0325079601bfa0c8b81f5622e1f35d57a9556937&format=json&query=%22kingdom%20hearts%22&resources=game,results
  //{results:[{'description','image:{'medium_url'}'},{},{}]}
  
  /*
  resumeCards : ResumeCard[] = [
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_medium/1897536-box_khearts.png', cardText:"<p>Kingdom Hearts is an action RPG published and developed by <a href=\"/square-co-ltd/3010-6323/\" data-ref-id=\"3010-6323\">Squaresoft</a>, and produced with the cooperation of the Walt Disney Company. The game incorporates many characters from Disney's animated works and several of <a href=\"/square-enix/3010-104/\" data-ref-id=\"3010-104\">Square Enix's</a> <a href=\"/final-fantasy/3025-194/\" data-ref-id=\"3025-194\">Final Fantasy</a> games. Kingdom Hearts sold 5.6 million copies worldwide (It was Square's highest selling PS2 game in North America) and was critically acclaimed for incorporating the two distinct worlds of Disney and Final Fantasy into one entertaining game.</p>"},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/621001-1056454795_00.gif', cardText:'Texto 2'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/706919-chessmaster_2000.jpg', cardText:'Texto 3'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/706919-chessmaster_2000.jpg', cardText:'Texto 3'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/706919-chessmaster_2000.jpg', cardText:'Texto 3'}
  ]
  */
  /*
  descriptionCards : ResumeCard[] = [
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/2370498-genesis_desertstrike_2__1_.jpg', cardText:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy.'},
    {imgSrc: 'https://www.giantbomb.com/api/image/scale_small/621001-1056454795_00.gif', cardText:'Texto 2'},
  ]
  */

  imagens : ImagemGaleria[] = [
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    //{src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    //{src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'},
    {src: 'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg', grande:'http://www.irmaosbrain.com/wp-content/uploads/2009/01/superego-avatar.jpg'} 
  ]
  //cards = [this.card1,this.card2,this.card3]

  constructor(private _apiService: ApiService){ }
  lsttitles:any[];
  lstreviews:any[];
  resumeCards:ResumeCard[] = [];
  descriptionCards:ResumeCard[] = [];
  ngOnInit() {
    this._apiService.getTitles('kingdom hearts','10')
    .subscribe
    (
      data =>
      {
        this.lsttitles = data['results'];
        let index;
        console.log(this.lsttitles.length);
        for (index = 0; index <this.lsttitles.length ; ++index){
          let textoEditado1 = this.lsttitles[index]['description'];
          if (this.lsttitles[index]['description'].includes("<h2>Overview<\/h2>")){
            textoEditado1 = this.lsttitles[index]['description'].split("<h2>Overview<\/h2>")[1];
          }
          let textoEditado2 = textoEditado1;
          if (textoEditado2.includes("<h2>Plot<\/h2>")){
            textoEditado2 = textoEditado1.split("<h2>Plot<\/h2>")[0];
          }

          let textoEditado3 = textoEditado2;
          if (textoEditado3.includes("<h2>Story<\/h2>")){
            textoEditado3 = textoEditado2.split("<h2>Story</h2>")[0];
          }

          console.log(textoEditado3,this.lsttitles[index]['image']['medium_url']);
          //this.resumeCards = [];
          this.resumeCards.push(new ResumeCard(this.lsttitles[index]['image']['medium_url'],textoEditado3));
        }
        console.log(this.resumeCards);
        

        /*
        this.lsttitles.forEach(function(element){
          let textoEditado1 = element['description']
          if (element['description'].includes("<h2>Overview<\/h2>")){
            textoEditado1 = element['description'].split("<h2>Overview<\/h2>")[1];
          }
          let textoEditado2 = textoEditado1;
          if (textoEditado2.includes("<h2>Plot<\/h2>")){
            textoEditado2 = textoEditado1.split("<h2>Plot<\/h2>")[0];
          }

          let textoEditado3 = textoEditado2;
          if (element['description'].includes("<h2>Story<\/h2>")){
            textoEditado3 = textoEditado2.split("<h2>Story</h2>")[0];
          }

          console.log(textoEditado3,element['image']['medium_url']);
          //this.resumeCards = [];
          this.resumeCard = new ResumeCard("algo","algo");
          console.log(this.resumeCard);
          //this.resumeCards.push(new ResumeCard(textoEditado3,element['image']['medium_url']));
          //this.resumeCard = new ResumeCard(textoEditado3,element['image']['medium_url']);
        });
        */
        
      }
    );
    // para os cards de review
    this._apiService.getTitles('resident evil','2')
    .subscribe
    (
      data =>
      {
        this.lstreviews = data['results'];
        let index;
        console.log(this.lstreviews.length);
        for (index = 0; index <this.lstreviews.length ; ++index){
          let textoEditado1 = this.lstreviews[index]['description'];
          if (this.lstreviews[index]['description'].includes("<h2>Overview<\/h2>")){
            textoEditado1 = this.lstreviews[index]['description'].split("<h2>Overview<\/h2>")[1];
          }
          let textoEditado2 = textoEditado1;
          if (textoEditado2.includes("<h2>Plot<\/h2>")){
            textoEditado2 = textoEditado1.split("<h2>Plot<\/h2>")[0];
          }

          let textoEditado3 = textoEditado2;
          if (textoEditado3.includes("<h2>Story<\/h2>")){
            textoEditado3 = textoEditado2.split("<h2>Story</h2>")[0];
          }

          console.log(textoEditado3,this.lstreviews[index]['image']['medium_url']);
          //this.resumeCards = [];
          this.descriptionCards.push(new ResumeCard(this.lstreviews[index]['image']['medium_url'],textoEditado3));
        }
        console.log(this.resumeCards);
        
      }
    );
  }

}
