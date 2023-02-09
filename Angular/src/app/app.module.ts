import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogginUsersComponent } from './loggin-users/loggin-users.component';

import { LogginUserService } from './loggin-user.service';
import { AppRouterModule } from './app-router.module';
import { HeaderComponent } from './header/header.component';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';  
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import { IndexLoggedComponent } from './index-logged/index-logged.component';
import { RealLogginUsersComponent } from './real-loggin-users/real-loggin-users.component';
import { ListaMedicamentosComponent } from './lista-medicamentos/lista-medicamentos.component';
import { RegistroEquipTransporteComponent } from './registro-equip-transporte/registro-equip-transporte.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { TransEquipmentService } from './trans-equipment.service';
import { MatTableModule } from '@angular/material/table';
import { RegistroMedicamentosComponent } from './registro-medicamentos/registro-medicamentos.component';
import { RequestMedicationsComponent } from './request-medications/request-medications.component';
import { NurseSolicitudMedicinaComponent } from './nurse-solicitud-medicina/nurse-solicitud-medicina.component';
import { NurseSolicitudMedicina2Component } from './nurse-solicitud-medicina2/nurse-solicitud-medicina2.component';
import { NurceMedicinaCaminoComponent } from './nurce-medicina-camino/nurce-medicina-camino.component';
import { NurceMedicinaCamino2Component } from './nurce-medicina-camino2/nurce-medicina-camino2.component';
import { NurceGestionarMedicinaComponent } from './nurce-gestionar-medicina/nurce-gestionar-medicina.component';
import { NurceGestionarMedicina2Component } from './nurce-gestionar-medicina2/nurce-gestionar-medicina2.component';
import { TecnicosSolicitudMedicinaComponent } from './tecnicos-solicitud-medicina/tecnicos-solicitud-medicina.component';
import { TecnicosSolicitudMedicina2Component } from './tecnicos-solicitud-medicina2/tecnicos-solicitud-medicina2.component';
import { TecnicosGestionMedicamentosComponent } from './tecnicos-gestion-medicamentos/tecnicos-gestion-medicamentos.component';
import { TecnicosGestionMedicamentos2Component } from './tecnicos-gestion-medicamentos2/tecnicos-gestion-medicamentos2.component';
import { TecnicoDespachoMedicinaCambioComponent } from './tecnico-despacho-medicina-cambio/tecnico-despacho-medicina-cambio.component';
import { TecnicosEntregaMedicinaComponent } from './tecnicos-entrega-medicina/tecnicos-entrega-medicina.component';
import { TecnicosEntregaMedicina2Component } from './tecnicos-entrega-medicina2/tecnicos-entrega-medicina2.component';
import { NurseEntregaMedicinaComponent } from './nurse-entrega-medicina/nurse-entrega-medicina.component';
import { RegresoEquiposListaComponent } from './regreso-equipos-lista/regreso-equipos-lista.component';
import { NurseTecnicoRegresoEquipoComponent } from './nurse-tecnico-regreso-equipo/nurse-tecnico-regreso-equipo.component';
import { TecnicosRegresoEquipoComponent } from './tecnicos-regreso-equipo/tecnicos-regreso-equipo.component';
import { NosotrosContactoComponent } from './nosotros-contacto/nosotros-contacto.component';
import { NosotrosMisionComponent } from './nosotros-mision/nosotros-mision.component';
import { NosotrosVisionComponent } from './nosotros-vision/nosotros-vision.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';



@NgModule({

  declarations: [
    AppComponent,
    LogginUsersComponent,
    HeaderComponent,
    IndexLoggedComponent,
    RealLogginUsersComponent,
    ListaMedicamentosComponent,
    RegistroEquipTransporteComponent,
    ListaEquiposComponent,
    RegistroMedicamentosComponent,
    RequestMedicationsComponent,
    NurseSolicitudMedicinaComponent,
    NurseSolicitudMedicina2Component,
    NurceMedicinaCaminoComponent,
    NurceMedicinaCamino2Component,
    NurceGestionarMedicinaComponent,
    NurceGestionarMedicina2Component,
    TecnicosSolicitudMedicinaComponent,
    TecnicosSolicitudMedicina2Component,
    TecnicosGestionMedicamentosComponent,
    TecnicosGestionMedicamentos2Component,
    TecnicoDespachoMedicinaCambioComponent,
    TecnicosEntregaMedicinaComponent,
    TecnicosEntregaMedicina2Component,
    NurseEntregaMedicinaComponent,
    RegresoEquiposListaComponent,
    NurseTecnicoRegresoEquipoComponent,
    TecnicosRegresoEquipoComponent,
    NosotrosContactoComponent,
    NosotrosMisionComponent,
    NosotrosVisionComponent,
    NosotrosComponent,
    PerfilUsuarioComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatTableModule
  ],
  providers: [LogginUserService, TransEquipmentService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
