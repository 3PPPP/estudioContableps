import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AboutComponent } from '../app/components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ImpositivoComponent } from './components/impositivo/impositivo.component';
import { ContabilidadComponent } from './components/contabilidad/contabilidad.component';
import { LaboralComponent } from './components/laboral/laboral.component';
import { FilosofiaComponent } from './components/filosofia/filosofia.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClientsComponent } from './components/clients/clients.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: "nosotros",
    component: AboutComponent
  },
  {
    path: 'servicios',
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
  {
    path: 'filosofia',
    component: FilosofiaComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'clientes',
    component: ClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
