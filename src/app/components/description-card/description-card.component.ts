import { Component, OnInit, Input } from '@angular/core';
import { ResumeCard } from '../resume-card/resume-card.model';

@Component({
  selector: 'game-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent implements OnInit {
  @Input() card: ResumeCard
  constructor() { }

  ngOnInit() {
  }

}
