import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-advertise-bar',
  templateUrl: './advertise-bar.component.html',
  styleUrls: ['./advertise-bar.component.scss']
})
export class AdvertiseBarComponent implements OnInit {
  advertise = {
      textAdv: 'Não se esqueça de se inscrever na nossa newsletter!',
      textBtn: 'Clique Aqui'
  }
  constructor() { }

  ngOnInit() {
  }

}
