import { Component } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { DatosPersonalesService } from 'src/app/Services/datos-personales.service';

import * as moment from 'moment';

@Component({
    template: ` 

      <form [formGroup]="dpForm" (ngSubmit)="onSubmit()">
              <!-- etiqueta para los mensajes-->
            <p-toast key="tst" [style]="{marginTop: '70px'}"></p-toast>

            <div class="card card-w-title" >
                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield md-inputfield-fill">
                            <input type="text" formControlName="nombres"  [attr.disabled]="true"  pInputText>
                            <label>Nombres</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield md-inputfield-fill">
                            <input type="text" formControlName="ap_paterno"  [attr.disabled]="true" pInputText>
                            <label>Apellido Paterno</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield md-inputfield-fill">
                            <input type="text" formControlName="ap_materno"  [attr.disabled]="true" pInputText>
                            <label>Apellido Materno</label>
                        </span>
                    </div>
                </div>
                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="ci" pInputText>
                            <label>N° Carnet Identidad</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <div class="ui-g-12 ui-md-4">
                            <p-dropdown id="dropdown" formControlName="extension" [options]="extension"></p-dropdown>
                        </div>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield md-inputfield-fill">
                            <input type="text" formControlName="email"  [attr.disabled]="true" pInputText>
                            <label>Email</label>
                        </span>
                    </div>
                </div>
                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="celular" pInputText>
                            <label>Celular</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="telefono" pInputText>
                            <label>Telefono</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="telefono_emergencia" pInputText>
                            <label>Telefono de Emergencia</label>
                        </span>
                    </div>
                </div>
                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                            <label>Fecha de Nacimiento</label> <br>
                             <input type="date" formControlName="fecha_nacimiento" pInputText>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="lugar_nacimiento"  pInputText>
                            <label>Lugar de Nacimiento</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="profesion" pInputText>
                            <label>Profesión</label>
                        </span>
                    </div>
                </div>

                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="domicilio" pInputText>
                            <label>Domicilio</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="zona" pInputText>
                            <label>Zona</label>
                        </span>
                    </div>
                </div>

                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="nro_domicilio" pInputText>
                            <label>N° Domicilio</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="barrio" pInputText>
                            <label>Barrio</label>
                        </span>
                    </div>
                </div>

                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="edificio" pInputText>
                            <label>Edificio</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="piso" pInputText>
                            <label>Piso</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="dpto" pInputText>
                            <label>Departamento</label>
                        </span>
                    </div>
                </div>
                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="estado_civil" pInputText>
                            <label>Estado Civil</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <div class="ui-g-12 ui-md-4">
                            <p-dropdown id="dropdown" formControlName="sexo" [options]="selectSexo"></p-dropdown>
                        </div>
                    </div>
                </div>

                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="tipo_sangre" pInputText>
                            <label>Tipo de Sangre</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="med_alergias" pInputText>
                            <label>Alergias a Medicamentos</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="casilla" pInputText>
                            <label>Casilla</label>
                        </span>
                    </div>
                </div>
                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="direccion_puesto" pInputText>
                            <label>Dirección del Puesto</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="denominacion_puesto" pInputText>
                            <label>Denominación del Puesto</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <label>Fecha de Ingreso al Cargo</label> <br>
                            <input type="date" formControlName="fecha_ingreso_cargo" pInputText>
                        </span>
                    </div>
                </div>

                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="cargo_jefe_inmediato" pInputText>
                            <label>Cargo del Jefe Inmediato Superior</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <label>Última fecha de Ingreso al INE sin cortes</label><br>
                            <input type="date" formControlName="ultima_fecha_ingreso_ine" pInputText>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="calif_anios_servicio" pInputText>
                            <label>Calificación de Años de Servicio:</label>
                        </span>
                    </div>
                </div>
             
            </div>

            <p-footer>
                <div class="ui-dialog-buttonpane ui-helper-clearfix">
                    <div class="d-flex justify-content-center">
                        <button type="button"  label="Salir" (click)="closeModal()" icon="ui-icon-cancel"  class="ui-button-danger" [style]="{marginRight: '15px'}" pButton></button>
                        <button type="submit" label="Guardar"  icon="ui-icon-person" class="ui-button-success"  pButton></button>

                    </div>
                </div>
            </p-footer>
        </form>

    `,
    providers: [MessageService, DialogService]
})
export class DatoPersonalModal {
    selectedCity1: any;
    extension: SelectItem[];
    selectSexo: SelectItem[];
    date6: Date;
    dpForm: FormGroup;
    id_persona: any;
    fecha;

    constructor(
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private _datosPersonalesService: DatosPersonalesService,
        private service: MessageService,
        private ref: DynamicDialogRef
    ) {
        this.dpForm = this.fb.group({
            nombres: ["", Validators.required],
            ap_paterno: ["", Validators.required],
            ap_materno: ["", Validators.required],
            ci: ["", Validators.required],
            celular: ["", Validators.required],
            telefono: ["", Validators.required],
            email: ["", Validators.required],
            extension: ["", Validators.required],
            fecha_nacimiento: ["", Validators.required],
            estado_civil: ["", Validators.required],
            lugar_nacimiento: ["", Validators.required],
            zona: ["", Validators.required],
            domicilio: ["", Validators.required],
            profesion: ["", Validators.required],
            barrio: ["", Validators.required],
            updated_at: ["", Validators.required],
            nro_domicilio: ["", Validators.required],
            sexo: ["", Validators.required],
            telefono_emergencia: ["", Validators.required],
            tipo_sangre: ["", Validators.required],
            med_alergias: ["", Validators.required],
            edificio: ["", Validators.required],
            piso: ["", Validators.required],
            dpto: ["", Validators.required],
            casilla: ["", Validators.required],
            direccion_puesto: ["", Validators.required],
            denominacion_puesto: ["", Validators.required],
            fecha_ingreso_cargo: ["", Validators.required],
            cargo_jefe_inmediato: ["", Validators.required],
            ultima_fecha_ingreso_ine: ["", Validators.required],
            calif_anios_servicio: ["", Validators.required],
        })
    }

    closeModal(): void {
        this.ref.close()
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(param => {
            console.log('param', param.id);
            this.id_persona = param.id;
            this._datosPersonalesService.getPersonalById(param.id).subscribe(res => {
                console.log('resIdPersonal', res);
                console.log(moment(res[0].fecha_nacimiento).format('YYYY-MM-DD'));
                var actualDate = moment()
                var date = moment(actualDate['_d']).format('YYYY-MM-DD')
                this.date6 = res[0].fecha_nacimiento
                console.log('fecha_nacimiento', this.date6);
                this.dpForm.patchValue({
                    nombres: res[0].nombres,
                    ap_paterno: res[0].ap_paterno,
                    ap_materno: res[0].ap_materno,
                    ci: res[0].ci,
                    celular: res[0].celular,
                    telefono: res[0].telefono,
                    email: res[0].email,
                    extension: res[0].extension,
                    fecha_nacimiento: moment(res[0].fecha_nacimiento).format('YYYY-MM-DD'),
                    estado_civil: res[0].estado_civil,
                    lugar_nacimiento: res[0].lugar_nacimiento,
                    zona: res[0].zona,
                    domicilio: res[0].domicilio,
                    profesion: res[0].profesion,
                    barrio: res[0].barrio,
                    updated_at: date,
                    nro_domicilio: res[0].nro_domicilio,
                    sexo: res[0].sexo,
                    telefono_emergencia: res[0].telefono_emergencia,
                    tipo_sangre: res[0].tipo_sangre,
                    med_alergias: res[0].med_alergias,
                    edificio: res[0].edificio,
                    piso: res[0].piso,
                    dpto: res[0].dpto,
                    casilla: res[0].casilla,
                    direccion_puesto: res[0].direccion_puesto,
                    denominacion_puesto: res[0].denominacion_puesto,
                    fecha_ingreso_cargo: res[0].fecha_ingreso_cargo,
                    cargo_jefe_inmediato: res[0].cargo_jefe_inmediato,
                    ultima_fecha_ingreso_ine: res[0].ultima_fecha_ingreso_ine,
                    calif_anios_servicio: res[0].calif_anios_servicio
                })
            })
        })
        // dropdowns
        this.extension = [];
        this.selectSexo = [];
        this.extension.push(
            { label: 'Seleccionar Extensión', value: null },
            { label: 'LA PAZ', value: 'LP' },
            { label: 'ORURO', value: 'OR' },
            { label: 'POTOSI', value: 'PT' },
            { label: 'COCHAMBAMBA', value: 'CBBA' },
            { label: 'CHUQUISACA', value: 'CH' },
            { label: 'TARIJA', value: 'TJ' },
            { label: 'SANTA CRUZ', value: 'SCZ' },
            { label: 'BENI', value: 'BE' },
            { label: 'PANDO', value: 'PN' },
        )
        this.selectSexo.push(
            { label: 'Seleccionar Genero', value: null },
            { label: 'MASCULINO', value: 'Masculino' },
            { label: 'FEMENINO', value: 'Femenino' },
        )
    }
    prueba(e) {
        console.log('e', e);
    }
    onSubmit() {
        console.log(this.dpForm.value);
        this._datosPersonalesService.putPersonal(this.id_persona, this.dpForm.value).subscribe(res => {
            console.log(res);
            this.showSuccessViaToast();
            this.ngOnInit()
            setTimeout(()=> {
                this.closeModal()
            }, 1000)

        }, (error) => {
            console.log(error);
            this.showErrorViaToast();
        })
    }

    // Mensajes de alerta
    showSuccessViaToast() {
        this.service.add({ key: 'tst', severity: 'success', summary: 'Formulario Almacenado', detail: 'Se almaceno los datos correctamente.' });
    }
    showErrorViaToast() {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error al Almacenar', detail: 'Existen problemas al almacenar los datos.' });
    }


}