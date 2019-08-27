import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Title } from './classes/title';
import { ResumeCard } from './components/resume-card/resume-card.model';
@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-project';
  constructor(private _apiService: ApiService){ }
  lsttitles:any[];
  //lsttitlesobj:Title[];
  resumeCards:ResumeCard[] = [];
  ngOnInit(){
    this._apiService.getTitles()
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
  }
}
