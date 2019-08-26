import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Title } from './classes/title';
@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-project';
  constructor(private _apiService: ApiService){ }
  lsttitles:Title[];
  ngOnInit(){
    this._apiService.getTitles()
    .subscribe
    (
      data =>
      {
        this.lsttitles = data['results'];
        console.log(this.lsttitles);
      }
    );
  }
}
