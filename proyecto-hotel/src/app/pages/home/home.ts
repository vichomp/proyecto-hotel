import { Component, OnInit } from '@angular/core';
import { Room } from '../../core/interfaces/rooms/rooms.interface';
import { HomeService } from '../../core/services/home-service/home';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';


const rooms = [
    { id: 1, numero: "101", tipo: "económico", precio: "35990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 2, numero: "102", tipo: "vip", precio: "135990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 3, numero: "103", tipo: "doble", precio: "64990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 4, numero: "104", tipo: "suite", precio: "159990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 5, numero: "105", tipo: "económico", precio: "32990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 6, numero: "106", tipo: "vip", precio: "142000.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 7, numero: "107", tipo: "doble", precio: "70990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 8, numero: "108", tipo: "suite", precio: "165990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 9, numero: "109", tipo: "económico", precio: "31990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 10, numero: "110", tipo: "vip", precio: "139990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 11, numero: "111", tipo: "doble", precio: "66990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 12, numero: "112", tipo: "suite", precio: "149990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 13, numero: "113", tipo: "económico", precio: "34990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 14, numero: "114", tipo: "vip", precio: "129990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 15, numero: "115", tipo: "doble", precio: "59990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 16, numero: "116", tipo: "suite", precio: "155000.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 17, numero: "117", tipo: "económico", precio: "30990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 18, numero: "118", tipo: "vip", precio: "149990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 19, numero: "119", tipo: "doble", precio: "63990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { id: 20, numero: "120", tipo: "suite", precio: "169990.00", imagenHabitacion: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" }
];


@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatGridListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home /*implements  OnInit*/  {
  rooms: Room[] = rooms

  constructor(private homeService: HomeService, private router: Router){}

  irADetalle(): void {
  this.router.navigate(['/reservas']);
}

  /*ngOnInit(): void {
      this.homeService
      .getRooms()
      .subscribe({
        next: (data) => this.rooms = data,
        error: (error) => console.error("Error al consumir API Habitaciones, ", error)
      })
  }*/

}
