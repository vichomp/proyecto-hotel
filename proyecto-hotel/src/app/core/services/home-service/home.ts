import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../../interfaces/rooms/rooms.interface';
import { HABITACIONES_API } from '../../contants/contans.api';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private api: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.api.get<Room[]>(HABITACIONES_API)
  }

}
