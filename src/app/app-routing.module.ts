import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AboutComponent } from '../app/components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ImpositivoComponent } from './components/impositivo/impositivo.component';
import { ContabilidadComponent } from './components/contabilidad/contabilidad.component';
import { LaboralComponent } from './components/laboral/laboral.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'impositivo',
    component: ImpositivoComponent
  },
  {
    path: 'contabilidad',
    component: ContabilidadComponent
  },
  {
    path: 'laboral',
    component: LaboralComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
