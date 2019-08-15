import { Component, OnInit, Input} from '@angular/core';
import { ResumeCard } from './resume-card.model';

@Component({
  selector: 'game-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss']
})
export class ResumeCardComponent implements OnInit {

  @Input() card: ResumeCard

  constructor() { }
  
  ngOnInit() {
  }

}
