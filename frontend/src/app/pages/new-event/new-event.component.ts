import { Component } from '@angular/core';
import { Evento } from 'src/app/Models/Evento';
import { EventoService } from 'src/app/service/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {
  btnValue = "Enviar";

  constructor(private eventoService: EventoService, private router: Router){}

  async createHandler(evento: Evento){

    await this.eventoService.createEvento(evento).subscribe();
    alert('Evento cadastrado com sucesso!')
    this.router.navigate(['/'])

  }


}
