import { Component, OnInit } from '@angular/core';
import { Room } from '../../core/interfaces/rooms/rooms.interface';
import { HomeService } from '../../core/services/home-service/home';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  rooms: Room[] = []

  constructor(private homeService: HomeService){}

  ngOnInit(): void {
      this.homeService
      .getRooms()
      .subscribe({
        next: (data) => this.rooms = data,
        error: (error) => console.error("Error al consumir API Habitaciones, ", error)
      })
  }

}
