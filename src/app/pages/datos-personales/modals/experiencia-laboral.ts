import { Component } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { DatosPersonalesService } from 'src/app/Services/datos-personales.service';

import * as moment from 'moment';

@Component({
    template: ` 

    <div class="ui-g-12">
        <!-- etiqueta para los mensajes-->
        <p-toast key="tst" [style]="{marginTop: '70px'}"></p-toast>
        <p-confirmDialog header="Confirmation" icon="ui-icon-warning" [style]="{width: '425px'}"></p-confirmDialog>
        <div class="card card-w-title">
            <p-tabView [style]="{fontSize: '18px'}">
                <!--LLENADO DE DATOS -->
                <p-tabPanel header="Llenado de Experiencia Laboral" leftIcon="ui-icon-check">
                    <form [formGroup]="dpForm" (ngSubmit)="onSubmit()">
                        <!-- etiqueta para los mensajes-->
                        <p-toast key="tst" [style]="{marginTop: '70px'}"></p-toast>
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <th>Institución</th>
                                    <th>Área</th>
                                    <th>Nombre del Puesto</th>
                                    <th>Fecha de Inicio</th>
                                    <th>Fecha de Conclusión</th>
                                    <th>Tipo de Funcionario</th>
                                    <th>Tiempo de Trabajo</th>
                                    <th>Experiencia Laboral</th>
                                </thead>
                                <tbody>
                                    <tr *ngFor="let field of fieldArray; let i = index">
                                        <td>
                                            <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.institucion" class="form-control"
                                                type="text" />
                                        </td>
                                        <td>
                                            <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.area" class="form-control"
                                                type="text" />
                                        </td>
                                        <td>
                                            <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.nombre_puesto" class="form-control"
                                                type="text" />
                                        </td>
                                        <td>
                                            <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.fecha_inicio" class="form-control"
                                                type="text" />
                                        </td>
                                        <td>
                                            <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.fecha_conclusion" class="form-control"
                                                type="text" />
                                        </td>
                                        <td>
                                            <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.tipo_funcionario" class="form-control"
                                                type="text" />
                                        </td>
                                        <td>
                                            <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.tiempo_trabajo" class="form-control"
                                                type="text" />
                                        </td>
                                        <td>
                                            <select class="form-select" [(ngModel)]="field.tipo_exp_laboral" [ngModelOptions]="{standalone: true}">
                                                <option value="INTERNA" selected>INTERNA</option>
                                                <option value="EXTERNA">EXTERNA</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button class="btn btn-alert" style="background-color: rgb(211, 76, 76); color: seashell;"
                                                type="button" (click)="deleteFieldValue3(i)">Borrar</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-control" type="text" placeholder="Institución" formControlName="institucion"  required>
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" placeholder="Área" formControlName="area"  required>
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" placeholder="Puesto" formControlName="nombre_puesto" required>
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" placeholder="Inicio" formControlName="fecha_inicio" required>
                                        </td>   
                                        <td>
                                            <input class="form-control" type="text" placeholder="Conclusión" formControlName="fecha_conclusion" required>
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" placeholder="Funcionario" formControlName="tipo_funcionario" required>
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" placeholder="Trabajo" formControlName="tiempo_trabajo" required>
                                        </td>
                                        <td>
                                            <select class="form-select" [(ngModel)]="selectExperiencia" [ngModelOptions]="{standalone: true}"
                                                (change)="desabilitar()">
                                                <option value="INTERNA" selected>INTERNA</option>
                                                <option value="EXTERNA">EXTERNA</option>
                                            </select>
                                        </td>
                                        <td>
                                        <button class="btn btn-secondary" type="button" (click)="addFieldValue3()"
                                            [disabled]="desabilitarBtn">Agregar</button>
                                        </td>
                                    </tr>
                                </tbody>
                              </table>
                        <p-footer>
                            <div class="ui-dialog-buttonpane ui-helper-clearfix">
                                <div class="d-flex justify-content-center">
                                <button type="button"  label="Salir" (click)="closeModal()" icon="ui-icon-cancel"  class="ui-button-danger" [style]="{marginRight: '15px'}" pButton></button>
                                    <button type="submit" label="Guardar" icon="ui-icon-person" class="ui-button-success" pButton></button>
                                </div>
                            </div>
                        </p-footer>
                    </form>
                </p-tabPanel>
             <!-- FIN DE LLENADO DE DATOS -->

            <!--MODIFICACION DE DATOS -->
                <p-tabPanel header="Modificación de Experiencia Laboral" leftIcon="ui-icon-check">
                   <table class="table table-striped table-bordered">
                        <thead>
                            <th>Institución</th>
                            <th>Área</th>
                            <th>Nombre del Puesto</th>
                            <th>Fecha de Inicio</th>
                            <th>Fecha de Conclusión</th>
                            <th>Tipo de Funcionario</th>
                            <th>Tiempo de Trabajo</th>
                            <th>Experiencia Laboral</th>
                        </thead>
                        <tbody>
                            <tr *ngFor="let field of fieldMod; let i = index">
                                <td>
                                    <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.institucion" class="form-control"
                                        type="text" />
                                </td>
                                <td>
                                    <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.area" class="form-control"
                                        type="text" />
                                </td>
                                <td>
                                    <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.nombre_puesto" class="form-control"
                                        type="text" />
                                </td>
                                <td>
                                    <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.fecha_inicio" class="form-control"
                                        type="text" />
                                </td>
                                <td>
                                    <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.fecha_conclusion" class="form-control"
                                        type="text" />
                                </td>
                                <td>
                                    <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.tipo_funcionario" class="form-control"
                                        type="text" />
                                </td>
                                <td>
                                    <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.tiempo_trabajo" class="form-control"
                                        type="text" />
                                </td>
                                <td>
                                    <select class="form-select" [(ngModel)]="selectMod[i]" [ngModelOptions]="{standalone: true}">
                                        <option value="INTERNA" selected>INTERNA</option>
                                        <option value="EXTERNA">EXTERNA</option>
                                    </select>
                                </td>
                                <td>
                                    <button class="btn btn-alert" style="background-color: rgb(211, 76, 76); color: seashell;"
                                        type="button" (click)="deleteFieldValue3(i)">Borrar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>  
                    <p-footer>
                            <div class="ui-dialog-buttonpane ui-helper-clearfix">
                                <div class="d-flex justify-content-center">
                                <button type="button"  label="Salir" (click)="closeModal()" icon="ui-icon-cancel"  class="ui-button-danger" [style]="{marginRight: '15px'}" pButton></button>
                                    <button type="button" (click)="onSubmitMod()" label="Modificar" icon="ui-icon-person" class="ui-button-success" pButton></button>
                                </div>
                            </div>
                    </p-footer>             
                </p-tabPanel>
            <!-- FIN DE MODIFICACION DE DATOS -->
            </p-tabView>
        </div>
    </div>

      
    `,
    providers: [MessageService, DialogService, ConfirmationService]
})
export class ExperienciaLaboralModal {
    date6: Date;
    dpForm: FormGroup;
    id_persona: any;
    selectExperiencia: any = {};

    fieldArray: Array<any> = [];
    fieldMod: Array<any> = [];
    selectMod: Array<any> = [];

    newAttribute3: any = {};
    desabilitarBtn: boolean = true;
    desabilitarInput: boolean = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private _datosPersonalesService: DatosPersonalesService,
        private confirmationService: ConfirmationService,
        private service: MessageService,
        private ref: DynamicDialogRef

    ) {
        this.dpForm = this.fb.group({
            institucion: ["", Validators.required],
            area: ["", Validators.required],
            nombre_puesto: ["", Validators.required],
            fecha_inicio: ["", Validators.required],
            fecha_conclusion: ["", Validators.required],
            tipo_funcionario: ["", Validators.required],
            tiempo_trabajo: ["", Validators.required],
            tipo_exp_laboral: ["", Validators.required]
        })
    }

    closeModal(): void {
        this.ref.close()
    }

    addFieldValue3() {
        this.fieldArray.push({
            id_personal: this.id_persona,
            institucion: this.dpForm.value.institucion,
            area: this.dpForm.value.area,
            nombre_puesto: this.dpForm.value.nombre_puesto,
            fecha_inicio: this.dpForm.value.fecha_inicio,
            fecha_conclusion: this.dpForm.value.fecha_conclusion,
            tipo_funcionario: this.dpForm.value.tipo_funcionario,
            tiempo_trabajo: this.dpForm.value.tiempo_trabajo,
            tipo_exp_laboral: this.selectExperiencia
        })
        this.dpForm.get('institucion').reset();
        this.dpForm.get('area').reset();
        this.dpForm.get('nombre_puesto').reset();
        this.dpForm.get('fecha_inicio').reset();
        this.dpForm.get('fecha_conclusion').reset();
        this.dpForm.get('tipo_funcionario').reset();
        this.dpForm.get('tiempo_trabajo').reset();

        this.selectExperiencia = {};
    }

    deleteFieldValue3(index) {
        this.fieldArray.splice(index, 1);
    }

    desabilitar() {
        if (this.selectExperiencia == 'INTERNA') {
            this.dpForm.controls['tipo_funcionario'].enable();
        } else {
            this.dpForm.controls['tipo_funcionario'].disable();
        }
        if (this.selectExperiencia == 'EXTERNA') {
            this.dpForm.controls['tiempo_trabajo'].enable();
        } else {
            this.dpForm.controls['tiempo_trabajo'].disable();
        }
        this.desabilitarBtn = false;
    }

    ngOnInit() {
        this.dpForm.controls['tipo_funcionario'].disable();
        this.dpForm.controls['tiempo_trabajo'].disable();

        this.activatedRoute.params.subscribe(param => {
            console.log('param', param.id);
            this.id_persona = param.id;
            this._datosPersonalesService.getExperienciaLaboralsById(this.id_persona).subscribe(res => {
                console.log('by id ==> ', res);
                for (let i in res) {
                    this.fieldMod.push({
                        id_experiencia_laboral: res[i].id_experiencia_laboral,
                        id_personal: this.id_persona,
                        institucion: res[i].institucion,
                        area: res[i].area,
                        nombre_puesto: res[i].nombre_puesto,
                        fecha_inicio: res[i].fecha_inicio,
                        fecha_conclusion: res[i].fecha_conclusion,
                        tipo_funcionario: res[i].tipo_funcionario,
                        tiempo_trabajo: res[i].tiempo_trabajo
                    })
                    this.selectMod.push(res[i].tipo_exp_laboral)
                }
            })
        })
    }

    onSubmitMod() {
        let c = 0;
        let array = []
        for (let i in this.fieldMod) {
            array.push({
                id_experiencia_laboral: this.fieldMod[i].id_experiencia_laboral,
                id_personal: this.id_persona,
                institucion: this.fieldMod[i].institucion,
                area: this.fieldMod[i].area,
                nombre_puesto: this.fieldMod[i].nombre_puesto,
                fecha_inicio: this.fieldMod[i].fecha_inicio,
                fecha_conclusion: this.fieldMod[i].fecha_conclusion,
                tipo_funcionario: this.fieldMod[i].tipo_funcionario,
                tiempo_trabajo: this.fieldMod[i].tiempo_trabajo,
                tipo_exp_laboral: this.selectMod[i]
            })
        }
        console.log(array);
        for (let j in array) {
            c++;
            let body = {
                id_experiencia_laboral: this.fieldMod[j].id_experiencia_laboral,
                id_personal: this.id_persona,
                institucion: this.fieldMod[j].institucion,
                area: this.fieldMod[j].area,
                nombre_puesto: this.fieldMod[j].nombre_puesto,
                fecha_inicio: this.fieldMod[j].fecha_inicio,
                fecha_conclusion: this.fieldMod[j].fecha_conclusion,
                tipo_funcionario: this.fieldMod[j].tipo_funcionario,
                tiempo_trabajo: this.fieldMod[j].tiempo_trabajo,
                tipo_exp_laboral: this.selectMod[j]
            }
            this._datosPersonalesService.putExperiencia(body).subscribe(res => {
                console.log(res);
                console.log(Object.keys(array).length);
            })
            console.log('c', c);
            if (c == Object.keys(array).length) {
                console.log('entraaaa');
                this.showSuccessViaToast();
                this.ngOnInit()
                setTimeout(() => {
                    this.closeModal()
                }, 500)
            }
        }
    }

    onSubmit() {
        console.log('this.fieldArray', this.fieldArray);
        this._datosPersonalesService.postExperienciaLaboral(this.fieldArray).subscribe(res => {
            console.log(res);
            console.log(res);
            this.showSuccessViaToast();
            this.ngOnInit()
            setTimeout(() => {
                this.closeModal()
            }, 1000)
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