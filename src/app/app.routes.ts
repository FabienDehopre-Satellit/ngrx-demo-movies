import {Routes} from "@angular/router";

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: 'movies', loadComponent: () => import('@app/movies').then(m => m.SearchMoviesPageComponent) },
  { path: '**', redirectTo: '/movies' },
];
