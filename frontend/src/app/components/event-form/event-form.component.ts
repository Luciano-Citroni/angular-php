import { Component, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  @Input() btnValue!: string;
  eventForm!: FormGroup;

  ngOnInit():void{
    this.eventForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      horario: new FormControl('', [Validators.required]),
      localizacao: new FormControl('', [Validators.required]),
    })
  }


  get nome(){
    return this.eventForm.get('nome')!;
  }
  get horario(){
    return this.eventForm.get('horario')!;
  }
  get localizacao(){
    return this.eventForm.get('localizacao')!;
  }

  submit(){
    if(this.eventForm.invalid){
      return;
    }

    return console.log('deu');

  }
}
