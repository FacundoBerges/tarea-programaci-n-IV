import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'bienvenida',
    loadComponent: () =>
      import('./pages/bienvenida/bienvenida.component').then(
        (c) => c.BienvenidaComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./pages/error/error.component').then((c) => c.ErrorComponent),
  },
  {
    path: 'autos',
    loadComponent: () =>
      import('./pages/autos/autos.component').then((c) => c.AutosComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/bienvenida',
  },
  {
    path: '**',
    redirectTo: '/error',
  },
];
