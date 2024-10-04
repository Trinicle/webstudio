import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('@webstudio/home').then((w) => w.homeRoutes),
  },
  {
    path: 'design',
    pathMatch: 'full',
    loadChildren: () => import('@webstudio/design').then((w) => w.designRoutes),
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => import('@webstudio/login').then((w) => w.loginRoutes),
  },
  {
    path: 'signup',
    pathMatch: 'full',
    loadChildren: () => import('@webstudio/signup').then((w) => w.signupRoutes),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
