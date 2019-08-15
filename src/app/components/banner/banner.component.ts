import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banner = {
    imgSrc: '../../assets/banner.png',
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis feugiat vivamus at augue eget arcu dictum varius. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Velit aliquet sagittis id consectetur purus ut. Integer eget aliquet nibh praesent tristique magna sit amet purus. Massa placerat duis ultricies lacus. Sed sed risus pretium quam vulputate dignissim suspendisse. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. At varius vel pharetra vel. Interdum consectetur libero id faucibus. Nulla facilisi morbi tempus iaculis urna. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Urna nec tincidunt praesent semper feugiat nibh sed. Dis parturient montes nascetur ridiculus mus mauris vitae.'
  }

  constructor() { }

  ngOnInit() {
  }

}
