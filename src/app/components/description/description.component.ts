import { Component, OnInit, Input } from '@angular/core';
import { ResumeCard } from '../resume-card/resume-card.model';

@Component({
  selector: 'game-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() cards: Array<ResumeCard>
  constructor() { }

  ngOnInit() {
  }

}
