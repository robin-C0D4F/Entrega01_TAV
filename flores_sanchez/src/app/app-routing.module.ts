import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./pages/weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'conversor',
    loadChildren: () => import('./pages/conversor/conversor.module').then( m => m.ConversorPageModule)
  },
  {
    path: 'coffee',
    loadChildren: () => import('./pages/coffee/coffee.module').then( m => m.CoffeePageModule)
  },
  {
    path: 'detalle-coffee',
    loadChildren: () => import('./pages/detalle-coffee/detalle-coffee.module').then( m => m.DetalleCoffeePageModule)
  },
    {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/page404/page404.module').then( m => m.Page404PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
