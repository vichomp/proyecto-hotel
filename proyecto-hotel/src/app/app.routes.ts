import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Reservations } from './pages/reservations/reservations';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'reservas',
        component: Reservations,
    },

];
