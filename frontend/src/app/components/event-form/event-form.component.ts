import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Evento } from 'src/app/Models/Evento';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  @Output() onSubmit = new EventEmitter<Evento>();
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
    
    return this.onSubmit.emit(this.eventForm.value);

  }
}
