import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './demo/view/dashboard.component';
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { UtilsDemoComponent } from './demo/view/utilsdemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';

// Componentes
import { PersonalListadoComponent } from './pages/datos-personales/personal-listado/personal-listado.component';
import { DatosPersonalListadoComponent } from './pages/datos-personales/datos-personal-listado/datos-personal-listado.component';
import { FormulariosPersonalesComponent } from './pages/datos-personales/formularios-personales/formularios-personales.component';
import { DocumentosPersonalesComponent } from './pages/datos-personales/documentos-personales/documentos-personales.component';
import { PermisosListadoComponent } from './pages/administrador/permisos-listado/permisos-listado.component';
import { DeclaracionesJuradasComponent } from './pages/datos-personales/declaraciones-juradas/declaraciones-juradas.component';
import { MemorandumListadoComponent } from './pages/acciones-personal/memorandum-listado/memorandum-listado.component';
import { Memorandum1Component } from './pages/acciones-personal/memorandum1/memorandum1.component';
import { Memorandum2Component } from './pages/acciones-personal/memorandum2/memorandum2.component';

import { ContratosInformesListadoComponent } from './pages/contratos-informes/contratos-informes-listado/contratos-informes-listado.component';
import { ContratosInformesComponent } from './pages/contratos-informes/contratos-informes/contratos-informes.component';
import { EvaluacionDesempenioComponent } from './pages/contratos-informes/evaluacion-desempenio/evaluacion-desempenio.component';

import { VacacionesListadoComponent } from './pages/vacaciones/vacaciones-listado/vacaciones-listado.component';
import { VacacionesComponent } from './pages/vacaciones/vacaciones/vacaciones.component';
import { CalificacionAniosServicioComponent } from './pages/vacaciones/calificacion-anios-servicio/calificacion-anios-servicio.component';

import { EstudiosRealizadosListadoComponent } from './pages/estudios-realizados/estudios-realizados-listado/estudios-realizados-listado.component';
import { FormacionAcademicaComponent } from './pages/estudios-realizados/formacion-academica/formacion-academica.component';
import { CertificadosCursosComponent } from './pages/estudios-realizados/certificados-cursos/certificados-cursos.component';

import { ExperienciaTrabajoListadoComponent } from './pages/experiencia-trabajo/experiencia-trabajo-listado/experiencia-trabajo-listado.component';
import { CurriculumVitaeComponent } from './pages/experiencia-trabajo/curriculum-vitae/curriculum-vitae.component';
import { DesvinculacionLaboralComponent } from './pages/experiencia-trabajo/desvinculacion-laboral/desvinculacion-laboral.component';
import { OtrosDocumentosListadoComponent } from './pages/otros-documentos/otros-documentos-listado/otros-documentos-listado.component';
import { IdiomaNativoComponent } from './pages/otros-documentos/idioma-nativo/idioma-nativo.component';
import { LibretaMilitarComponent } from './pages/otros-documentos/libreta-militar/libreta-militar.component';
import { RegistroNuaCuaAfpComponent } from './pages/otros-documentos/registro-nua-cua-afp/registro-nua-cua-afp.component';
import { CuentaBancoUnionComponent } from './pages/otros-documentos/cuenta-banco-union/cuenta-banco-union.component';
import { Certificado1178Component } from './pages/otros-documentos/certificado-1178/certificado-1178.component';
import { CertificadoPoliticasPublicasComponent } from './pages/otros-documentos/certificado-politicas-publicas/certificado-politicas-publicas.component';
import { CertificadoEgppComponent } from './pages/otros-documentos/certificado-egpp/certificado-egpp.component';
import { Formulario26Component } from './pages/datos-personales/formulario26/formulario26.component';
import { Formulario29Component } from './pages/datos-personales/formulario29/formulario29.component';

//Guards
import { AuthGuard } from './guards/auth.guard';
import { CertificadoSipaseComponent } from './pages/otros-documentos/certificado-sipase/certificado-sipase.component';
import { CertificadoRegapComponent } from './pages/otros-documentos/certificado-rejap/certificado-rejap.component';
import { CarnetIdentidadComponent } from './pages/otros-documentos/carnet-identidad/carnet-identidad.component';
import { LicenciaConducirComponent } from './pages/otros-documentos/licencia-conducir/licencia-conducir.component';
import { CertificadoAntecedentesComponent } from './pages/otros-documentos/certificado-antecedentes-transito/certificado-antecedentes-transito.component';

export const routes: Routes = [
    { 
        path: '', component: AppMainComponent,
        canActivate: [ AuthGuard ],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'components/sample', component: SampleDemoComponent },
            { path: 'components/forms', component: FormsDemoComponent },
            { path: 'components/data', component: DataDemoComponent },
            { path: 'components/panels', component: PanelsDemoComponent },
            { path: 'components/overlays', component: OverlaysDemoComponent },
            { path: 'components/menus', component: MenusDemoComponent },
            { path: 'components/messages', component: MessagesDemoComponent },
            { path: 'components/misc', component: MiscDemoComponent },
            { path: 'pages/empty', component: EmptyDemoComponent },
            { path: 'components/charts', component: ChartsDemoComponent },
            { path: 'components/file', component: FileDemoComponent },
            { path: 'components/file', component: FileDemoComponent },
            { path: 'utils', component: UtilsDemoComponent },
            { path: 'documentation', component: DocumentationComponent },     
            { path: 'personal-listado', component: PersonalListadoComponent },     
            { path: 'datos-personal-listado', component: DatosPersonalListadoComponent },     
            { path: 'formularios-personales/:id', component: FormulariosPersonalesComponent },     
            { path: 'documentos-personales/:id', component: DocumentosPersonalesComponent },  
            { path: 'declaraciones-juradas/:id', component: DeclaracionesJuradasComponent },    
            { path: 'permiso-listado', component: PermisosListadoComponent },  
            { path: 'memorandum-listado', component: MemorandumListadoComponent },     
            { path: 'memorandum1/:id', component: Memorandum1Component },     
            { path: 'memorandum2/:id', component: Memorandum2Component },   
            { path: 'contratos-informes-listado', component: ContratosInformesListadoComponent },     
            { path: 'contratos-informes/:id', component: ContratosInformesComponent },     
            { path: 'evaluacion-desempenio/:id', component: EvaluacionDesempenioComponent },     
            { path: 'vacaciones-listado', component: VacacionesListadoComponent },     
            { path: 'vacaciones/:id', component: VacacionesComponent },     
            { path: 'calificacion-anios-servicio/:id', component: CalificacionAniosServicioComponent },  
            { path: 'estudios-realizados-listado', component: EstudiosRealizadosListadoComponent },     
            { path: 'formacion-academica/:id', component: FormacionAcademicaComponent },     
            { path: 'certificados-cursos/:id', component: CertificadosCursosComponent },  
            { path: 'experiencia-trabajo-listado', component: ExperienciaTrabajoListadoComponent },     
            { path: 'curriculum-vitae/:id', component: CurriculumVitaeComponent },     
            { path: 'desvinculacion-laboral/:id', component: DesvinculacionLaboralComponent },
            { path: 'otros-documentos-listado', component: OtrosDocumentosListadoComponent },     
            { path: 'idioma-nativo/:id', component: IdiomaNativoComponent },
            { path: 'libreta-militar/:id', component: LibretaMilitarComponent },
            { path: 'registro-nua-cua-afp/:id', component: RegistroNuaCuaAfpComponent },
            { path: 'cuenta-banco-union/:id', component: CuentaBancoUnionComponent },
            { path: 'certificado-1178/:id', component: Certificado1178Component },
            { path: 'certificado-politicas-publicas/:id', component: CertificadoPoliticasPublicasComponent },
            { path: 'certificado-egpp/:id', component: CertificadoEgppComponent },
            { path: 'certificado-sipase/:id', component: CertificadoSipaseComponent },
            { path: 'certificado-rejap/:id', component: CertificadoRegapComponent },
            { path: 'carnet-identidad/:id', component: CarnetIdentidadComponent },
            { path: 'licencia-conducir/:id', component: LicenciaConducirComponent },
            { path: 'certificado-antecedentes-transito/:id', component: CertificadoAntecedentesComponent },
            { path: 'formulario26/:id', component: Formulario26Component },
            { path: 'formulario29/:id', component: Formulario29Component },

        ]
    },

    {path: 'error', component: AppErrorComponent},
    {path: 'error', component: AppErrorComponent},
    {path: 'accessdenied', component: AppAccessdeniedComponent},
    {path: 'notfound', component: AppNotfoundComponent},
    {path: 'login', component: AppLoginComponent},

   // {path: '**', redirectTo: '/notfound'},

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
