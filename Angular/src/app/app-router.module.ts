import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";

import { LogginUsersComponent } from "./loggin-users/loggin-users.component";
import {IndexLoggedComponent} from "./index-logged/index-logged.component";
import { RealLogginUsersComponent } from "./real-loggin-users/real-loggin-users.component";
import { ListaMedicamentosComponent } from "./lista-medicamentos/lista-medicamentos.component";
import { RegistroEquipTransporteComponent } from "./registro-equip-transporte/registro-equip-transporte.component";
import { ListaEquiposComponent } from "./lista-equipos/lista-equipos.component";
import { RegistroMedicamentosComponent } from "./registro-medicamentos/registro-medicamentos.component";
import { RequestMedicationsComponent } from "./request-medications/request-medications.component";
import { NurseSolicitudMedicinaComponent } from './nurse-solicitud-medicina/nurse-solicitud-medicina.component';
import { NurseSolicitudMedicina2Component } from "./nurse-solicitud-medicina2/nurse-solicitud-medicina2.component";
import { NurceMedicinaCaminoComponent } from './nurce-medicina-camino/nurce-medicina-camino.component';
import { NurceMedicinaCamino2Component } from './nurce-medicina-camino2/nurce-medicina-camino2.component';
import { NurceGestionarMedicinaComponent } from "./nurce-gestionar-medicina/nurce-gestionar-medicina.component";
import { NurceGestionarMedicina2Component } from "./nurce-gestionar-medicina2/nurce-gestionar-medicina2.component";
import { TecnicosSolicitudMedicinaComponent } from "./tecnicos-solicitud-medicina/tecnicos-solicitud-medicina.component";
import { TecnicosSolicitudMedicina2Component } from "./tecnicos-solicitud-medicina2/tecnicos-solicitud-medicina2.component";
import { TecnicosGestionMedicamentosComponent } from "./tecnicos-gestion-medicamentos/tecnicos-gestion-medicamentos.component";
import { TecnicosGestionMedicamentos2Component } from "./tecnicos-gestion-medicamentos2/tecnicos-gestion-medicamentos2.component";
import { TecnicoDespachoMedicinaCambioComponent } from "./tecnico-despacho-medicina-cambio/tecnico-despacho-medicina-cambio.component";
import { TecnicosEntregaMedicinaComponent } from "./tecnicos-entrega-medicina/tecnicos-entrega-medicina.component";
import { TecnicosEntregaMedicina2Component } from "./tecnicos-entrega-medicina2/tecnicos-entrega-medicina2.component";
import { NurseEntregaMedicinaComponent } from "./nurse-entrega-medicina/nurse-entrega-medicina.component";
import { RegresoEquiposListaComponent } from "./regreso-equipos-lista/regreso-equipos-lista.component";
import { NurseTecnicoRegresoEquipoComponent } from "./nurse-tecnico-regreso-equipo/nurse-tecnico-regreso-equipo.component";
import { TecnicosRegresoEquipoComponent } from "./tecnicos-regreso-equipo/tecnicos-regreso-equipo.component";
import { NosotrosContactoComponent } from "./nosotros-contacto/nosotros-contacto.component";
import { NosotrosMisionComponent } from "./nosotros-mision/nosotros-mision.component";
import { NosotrosVisionComponent } from "./nosotros-vision/nosotros-vision.component";
import { NosotrosComponent } from "./nosotros/nosotros.component";
import { PerfilUsuarioComponent } from "./perfil-usuario/perfil-usuario.component";


//RUTAS DE ACCESO
const routes:Routes = [
    {path:'', component: IndexComponent},
    {path:'register', component: LogginUsersComponent},
    {path: 'indexLogged', component: IndexLoggedComponent},
    {path: 'loggin', component:RealLogginUsersComponent},
    {path: 'listaMedicamentos', component:ListaMedicamentosComponent},
    {path: 'registroEquipoTransporte', component:RegistroEquipTransporteComponent},
    {path: 'listaEquipos', component:ListaEquiposComponent},
    {path: 'registroMedicinas', component:RegistroMedicamentosComponent},
    {path: 'solicitarMedicina', component:RequestMedicationsComponent},
    {path: 'nurseSolicitudesMedicinas', component: NurseSolicitudMedicinaComponent},
    {path: 'nurseSolicitudesMedicinas2', component: NurseSolicitudMedicina2Component},
    {path: 'nurseGestionarMedicina', component: NurceGestionarMedicinaComponent},
    {path: 'nurseGestionarMedicina2', component: NurceGestionarMedicina2Component},
    {path: 'nurseMedicinaCamino', component: NurceMedicinaCaminoComponent},
    {path: 'nurseMedicinaCamino2', component: NurceMedicinaCamino2Component},
    {path: 'tecnicoSolicitudMedicina', component: TecnicosSolicitudMedicinaComponent},
    {path: 'tecnicoSolicitudMedicina2', component: TecnicosSolicitudMedicina2Component},
    {path: 'tecnicoGestionMedicamento', component: TecnicosGestionMedicamentosComponent},
    {path: 'tecnicoGestionMedicamento2', component: TecnicosGestionMedicamentos2Component},
    {path: 'tecnicoDespachoMedicinaCamino', component:TecnicoDespachoMedicinaCambioComponent},
    {path: 'tecnicoEntregaMedicina', component: TecnicosEntregaMedicinaComponent},
    {path: 'tecnicoEntregaMedicina2', component: TecnicosEntregaMedicina2Component},
    {path: 'nurseEntregaMedicina', component:NurseEntregaMedicinaComponent},
    {path: 'entregaEquiposLista', component:RegresoEquiposListaComponent},
    {path: 'nurseTecnicoEntregaEquipos', component:NurseTecnicoRegresoEquipoComponent},
    {path: 'tecnicoEntregaEquipos', component:TecnicosRegresoEquipoComponent},
    {path: 'contacto', component:NosotrosContactoComponent},
    {path: 'mision', component:NosotrosMisionComponent},
    {path: 'vision', component:NosotrosVisionComponent},
    {path: 'nosotros', component:NosotrosComponent},
    {path: 'perfilUsuario', component:PerfilUsuarioComponent}
   
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}