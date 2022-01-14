import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppRoutes} from './app.routes';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppConfigComponent } from './app.config.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';
import {AppMenuComponent} from './app.menu.component';
//import { AppMenuitemComponent } from './shared/app.menuitem.component';
//import {AppBreadcrumbComponent} from './app.breadcrumb.component';
//import {AppTopBarComponent} from './shared/toolbar/app.topbar.component';
//import {AppFooterComponent} from './shared/footer/app.footer.component';
import {DashboardComponent} from './demo/view/dashboard.component';
import {SampleDemoComponent} from './demo/view/sampledemo.component';
import {FormsDemoComponent} from './demo/view/formsdemo.component';
import {DataDemoComponent} from './demo/view/datademo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {UtilsDemoComponent} from './demo/view/utilsdemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';

// Slider images
import { NgImageSliderModule } from 'ng-image-slider';

// Angular Material
import { MatTabsModule } from '@angular/material/tabs';

import {CarService} from './demo/service/carservice';
import {CountryService} from './demo/service/countryservice';
import {EventService} from './demo/service/eventservice';
import {NodeService} from './demo/service/nodeservice';

import {BreadcrumbService} from './services/breadcrumb.service';
import {MenuService} from './services/app.menu.service';

// Modulos
import { SharedModule } from './shared/shared.module';
import { PersonalListadoComponent } from './pages/datos-personales/personal-listado/personal-listado.component';
import { DatosPersonalListadoComponent } from './pages/datos-personales/datos-personal-listado/datos-personal-listado.component';
import { FormulariosPersonalesComponent } from './pages/datos-personales/formularios-personales/formularios-personales.component';
import { DocumentosPersonalesComponent } from './pages/datos-personales/documentos-personales/documentos-personales.component';
import { DatosDependientesModal } from './pages/datos-personales/modals/datos-dependientes';


// Pipe
import { SafePipe } from './pipe/safe.pipe';
import { PermisosListadoComponent } from './pages/administrador/permisos-listado/permisos-listado.component';
// Modals
import { DatoPersonalModal } from './pages/datos-personales/modals/datos-personales';
import { DatosConyugueModal } from './pages/datos-personales/modals/datos-conyugue';
import { DatosEducacionModal } from './pages/datos-personales/modals/datos-educacion';
import { ExperienciaLaboralModal } from './pages/datos-personales/modals/experiencia-laboral';

import { DeclaracionesJuradasComponent } from './pages/datos-personales/declaraciones-juradas/declaraciones-juradas.component';
import { Memorandum1Component } from './pages/acciones-personal/memorandum1/memorandum1.component';
import { Memorandum2Component } from './pages/acciones-personal/memorandum2/memorandum2.component';
import { MemorandumListadoComponent } from './pages/acciones-personal/memorandum-listado/memorandum-listado.component';
import { ContratosInformesListadoComponent } from './pages/contratos-informes/contratos-informes-listado/contratos-informes-listado.component';
import { ContratosInformesComponent } from './pages/contratos-informes/contratos-informes/contratos-informes.component';
import { EvaluacionDesempenioComponent } from './pages/contratos-informes/evaluacion-desempenio/evaluacion-desempenio.component';
import { VacacionesListadoComponent } from './pages/vacaciones/vacaciones-listado/vacaciones-listado.component';
import { VacacionesComponent } from './pages/vacaciones/vacaciones/vacaciones.component';
import { CalificacionAniosServicioComponent } from './pages/vacaciones/calificacion-anios-servicio/calificacion-anios-servicio.component';
import { FormacionAcademicaComponent } from './pages/estudios-realizados/formacion-academica/formacion-academica.component';
import { EstudiosRealizadosListadoComponent } from './pages/estudios-realizados/estudios-realizados-listado/estudios-realizados-listado.component';
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
import { CertificadoSipaseComponent } from './pages/otros-documentos/certificado-sipase/certificado-sipase.component';
import { CertificadoRegapComponent } from './pages/otros-documentos/certificado-rejap/certificado-rejap.component';
import { CarnetIdentidadComponent } from './pages/otros-documentos/carnet-identidad/carnet-identidad.component';
import { LicenciaConducirComponent } from './pages/otros-documentos/licencia-conducir/licencia-conducir.component';
import { CertificadoAntecedentesComponent } from './pages/otros-documentos/certificado-antecedentes-transito/certificado-antecedentes-transito.component';
import { Formulario26Component } from './pages/datos-personales/formulario26/formulario26.component';
import { Formulario29Component } from './pages/datos-personales/formulario29/formulario29.component';

// KENDO PDF
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';


@NgModule({
    imports: [
        PDFExportModule,
        DynamicDialogModule,
        NgImageSliderModule,
        MatTabsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule ,
        AppRoutes,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        ScrollPanelModule,
        SelectButtonModule,
        SlideMenuModule,
        SliderModule,
        SpinnerModule,
        SplitButtonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        SharedModule,
        
    ],
    declarations: [
        //modals
        DatosEducacionModal,
        DatoPersonalModal,
        DatosConyugueModal,
        DatosDependientesModal,
        ExperienciaLaboralModal,
        SafePipe,
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        //AppMenuitemComponent,
            AppConfigComponent,
        //AppBreadcrumbComponent,
        //AppTopBarComponent,
        //AppFooterComponent,
        DashboardComponent,
        SampleDemoComponent,
        FormsDemoComponent,
        DataDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MenusDemoComponent,
        MessagesDemoComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        UtilsDemoComponent,
        DocumentationComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        AppLoginComponent,
        PersonalListadoComponent,
        DatosPersonalListadoComponent,
        FormulariosPersonalesComponent,
        DocumentosPersonalesComponent,
        PermisosListadoComponent,
        DeclaracionesJuradasComponent,
        Memorandum1Component,
        Memorandum2Component,
        MemorandumListadoComponent,
        ContratosInformesListadoComponent,
        ContratosInformesComponent,
        EvaluacionDesempenioComponent,
        VacacionesListadoComponent,
        VacacionesComponent,
        CalificacionAniosServicioComponent,
        FormacionAcademicaComponent,
        EstudiosRealizadosListadoComponent,
        CertificadosCursosComponent,
        ExperienciaTrabajoListadoComponent,
        CurriculumVitaeComponent,
        DesvinculacionLaboralComponent,
        OtrosDocumentosListadoComponent,
        IdiomaNativoComponent,
        LibretaMilitarComponent,
        RegistroNuaCuaAfpComponent,
        CuentaBancoUnionComponent,
        Certificado1178Component,
        CertificadoPoliticasPublicasComponent,
        CertificadoEgppComponent,
        CertificadoSipaseComponent,
        CertificadoRegapComponent,
        CarnetIdentidadComponent,
        LicenciaConducirComponent,
        CertificadoAntecedentesComponent,
        Formulario26Component,
        Formulario29Component
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CarService, CountryService, EventService, NodeService, BreadcrumbService, MenuService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
