import { Component, OnInit, Input } from '@angular/core';
import { ImagemGaleria } from './imagem-galeria.model';

@Component({
  selector: 'game-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  isVisible: boolean = false;
  modalImage: string = '';
  @Input() imagens : Array<ImagemGaleria>
  openModal(imagem: ImagemGaleria){
    console.log(imagem.grande);
    this.isVisible = true;
    this.modalImage = imagem.grande;
  }
  closeModal(){
    this.isVisible = false;
    this.modalImage = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
