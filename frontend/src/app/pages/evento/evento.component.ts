import { Component } from '@angular/core';
import { EventoService } from 'src/app/service/evento.service';
import {Evento} from '../../Models/Evento';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  evento? : Evento;

  constructor(
    private eventoService: EventoService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit():void{
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.eventoService.getEventosById(id).subscribe(evento => this.evento);
  
  }
}
