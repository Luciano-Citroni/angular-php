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
  id? : number;

  constructor(
    private eventoService: EventoService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit():void{
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.eventoService.getEventosById(this.id).subscribe(evento => this.evento = evento);
  }

  async deleteHandle(){
    await this.eventoService.deleteEventosById(this.id!).subscribe();

    alert('Evento excluido com sucesso!')
    this.router.navigate(['/'])
  
  }
}
