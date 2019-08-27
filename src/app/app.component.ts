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
  constructor(){ }

  ngOnInit(){
    
  }
}
