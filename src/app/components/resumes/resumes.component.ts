import { Component, OnInit, Input } from '@angular/core';
import { ResumeCard } from '../resume-card/resume-card.model';

@Component({
  selector: 'game-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.scss']
})
export class ResumesComponent implements OnInit {

  @Input() cards: Array<ResumeCard>
  @Input() typeOfCard: string
  constructor() { }

  ngOnInit() {
  }

}
