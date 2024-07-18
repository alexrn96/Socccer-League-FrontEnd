import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'teams',
        loadComponent:()=>import('./components/team/team.component'),
    }
];
