import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'game-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contatoForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.contatoForm = new FormGroup({
      'name': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.email])
    });
  }

  submitFormulario():void{
    const nameControl = this.contatoForm.get('name');
    const emailControl = this.contatoForm.get('email');
    console.log('Irei submeter as informações:');
    console.log('nome:'+nameControl.value);
    console.log('email:'+emailControl.value);
  }
}
