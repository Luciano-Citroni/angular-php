import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../Models/Evento';

import {environment} from '../utils/environments';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/eventos`



  constructor(private http: HttpClient) { }


  createEvento(jsonData: Object): Observable<Object>{
    return this.http.post<Object>(this.apiUrl, jsonData);
  }

  getEventos(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.apiUrl);
  }

  getEventosById(id: number): Observable<Evento>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Evento>(url);
  }

}

