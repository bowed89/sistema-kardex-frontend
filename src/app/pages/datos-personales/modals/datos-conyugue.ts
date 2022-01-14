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

            <div class="card card-w-title">
                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="nombres" pInputText>
                            <label>Nombres</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="ap_paterno" pInputText>
                            <label>Apellido Paterno</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="ap_materno" pInputText>
                            <label>Apellido Materno</label>
                        </span>
                    </div>
                </div>
      
                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="telefono" pInputText>
                            <label>Telefono</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="ocupacion" pInputText>
                            <label>Ocupación</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="lugar_nacimiento" pInputText>
                            <label>Lugar de Nacimiento</label>
                        </span>
                    </div>
                </div>

                <div class="ui-g form-group">
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <label>Fecha de Nacimiento</label> <br>
                            <input type="date" formControlName="fecha_nacimiento" pInputText>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="cedula_identidad" pInputText>
                            <label>Cédula de Identidad</label>
                        </span>
                    </div>
                    <div class="ui-g-12 ui-md-4">
                        <span class="md-inputfield">
                            <input type="text" formControlName="ciudad" pInputText>
                            <label>Ciudad</label>
                        </span>
                    </div>
                </div>
            </div>

            <p-footer>
                <div class="ui-dialog-buttonpane ui-helper-clearfix">
                    <div class="d-flex justify-content-center">
                    <button type="button"  label="Salir" (click)="closeModal()" icon="ui-icon-cancel"  class="ui-button-danger" [style]="{marginRight: '15px'}" pButton></button>
                        <button type="submit" label="Guardar" icon="ui-icon-person" class="ui-button-success" pButton></button>
                    </div>
                </div>
            </p-footer>
        </form>
    `,
    providers: [MessageService, DialogService]
})
export class DatosConyugueModal {
    date6: Date;
    dpForm: FormGroup;
    id_persona: any;

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
            telefono: ["", Validators.required],
            ocupacion: ["", Validators.required],
            lugar_nacimiento: ["", Validators.required],
            fecha_nacimiento: ["", Validators.required],
            cedula_identidad: ["", Validators.required],
            ciudad: ["", Validators.required],

        })
    }

    closeModal(): void {
        this.ref.close()
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(param => {
            console.log('param', param.id);
            this.id_persona = param.id;
            this._datosPersonalesService.getConyugueById(param.id).subscribe(res => {
                console.log('resIdConyugue', res);
                if (res.length != 0) {
                    this.dpForm.patchValue({
                        nombres: res[0].nombres,
                        ap_paterno: res[0].ap_paterno,
                        ap_materno: res[0].ap_materno,
                        telefono: res[0].telefono,
                        ocupacion: res[0].ocupacion,
                        lugar_nacimiento: res[0].lugar_nacimiento,
                        fecha_nacimiento: res[0].fecha_nacimiento,
                        cedula_identidad: res[0].cedula_identidad,
                        ciudad: res[0].ciudad
                    })
                }
            })
        })
    }
    ciudad
    onSubmit() {
        var actualDate = moment()
        var date = moment(actualDate['_d']).format('YYYY-MM-DD')
        this.dpForm.value.id_personal = this.id_persona
        this.dpForm.value.created_at = date
        console.log(this.dpForm.value);
        this._datosPersonalesService.getConyugueById(this.id_persona).subscribe(res => {
            if (res.length == 0) {
                this._datosPersonalesService.postConyugue(this.dpForm.value).subscribe(resp => {
                    console.log('ingreso a post', resp);
                    this.showSuccessViaToast();
                    this.ngOnInit()
                    setTimeout(() => {
                        this.closeModal()
                    }, 1000)
                })
            } else {
                this._datosPersonalesService.putConyugue(this.id_persona, this.dpForm.value).subscribe(resps => {
                    console.log('ingresa a put', resps);
                    this.showSuccessViaToast();
                    this.ngOnInit()
                    setTimeout(() => {
                        this.closeModal()
                    }, 1000)
                }, (error) => {
                    console.log(error);
                    this.showErrorViaToast();
                })
            }
        })
    }

    // Mensajes de alerta
    showSuccessViaToast() {
        this.service.add({ key: 'tst', severity: 'success', summary: 'Formulario Almacenado', detail: 'Se almacenaron los datos correctamente.' });
    }
    showErrorViaToast() {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error al Almacenar', detail: 'Existen problemas al almacenar los datos.' });
    }
}