import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { ImpositivoComponent } from './components/impositivo/impositivo.component';
import { ContabilidadComponent } from './components/contabilidad/contabilidad.component';
import { LaboralComponent } from './components/laboral/laboral.component';
import { FilosofiaComponent } from './components/filosofia/filosofia.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    ImpositivoComponent,
    ContabilidadComponent,
    LaboralComponent,
    FilosofiaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
