import { Component } from '@angular/core';
import { EventoService } from 'src/app/service/evento.service';
import { Evento } from 'src/app/Models/Evento';
import {environment} from '../../utils/environments';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allEventos: Evento[] = [];
  eventos: Evento[] = [];
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private eventoService: EventoService){}

  ngOnInit():void{
    this.eventoService.getEventos().subscribe((evento)=> {
      this.allEventos = evento;
      this.eventos = evento;
      
    });
  
  }

  search(e: Event): void{
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.eventos = this.allEventos.filter(evento => evento.nome.toLowerCase().includes(value))
  
  
  }


}
