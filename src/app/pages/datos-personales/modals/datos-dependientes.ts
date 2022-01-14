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
                    <p-tabPanel header="Llenado de Dependientes" leftIcon="ui-icon-check">
                        <form [formGroup]="dpForm" (ngSubmit)="onSubmit()">
                            <!-- etiqueta para los mensajes-->
                            <p-toast key="tst" [style]="{marginTop: '70px'}"></p-toast>
                                <table class="table table-striped table-bordered">
                                    <thead>
                                        <th>Nombres</th>
                                        <th>Parentesco</th>
                                        <th>Discapacidad</th>
                                    </thead>
                                    <tbody>
                                        <tr *ngFor="let field of fieldArray; let i = index">
                                            <td>
                                                <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.nombres" class="form-control"
                                                    type="text" />
                                            </td>
                                            <td>
                                                <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.parentesco" class="form-control"
                                                    type="text" />
                                            </td>
                                            <td>
                                                <select class="form-select" [(ngModel)]="field.discapacidad" [ngModelOptions]="{standalone: true}">
                                                    <option value="Si" selected>Con Discapacidad</option>
                                                    <option value="No">Sin Discapacidad</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button class="btn btn-alert" style="background-color: rgb(211, 76, 76); color: seashell;"
                                                    type="button" (click)="deleteFieldValue3(i)">Borrar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="form-control" type="text" placeholder="Nombres Requeridos" formControlName="nombres"  required>
                                            </td>
                                            <td>
                                                <input class="form-control" type="text" placeholder="Parentesco Requerido" formControlName="parentesco" required>
                                            </td>
                                            <td>
                                                <select class="form-select" [(ngModel)]="selectDiscapacidad" [ngModelOptions]="{standalone: true}"
                                                    (change)="desabilitar()">
                                                    <option value="Si" selected>Con Discapacidad</option>
                                                    <option value="No">Sin Discapacidad</option>
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

                    <!-- MODIFICACION DE DATOS -->
                    <p-tabPanel header="Modificación de Dependientes" leftIcon="ui-icon-check">
                         <table class="table table-striped table-bordered">
                            <thead>
                                <th>Nombres</th>
                                <th>Parentesco</th>
                                <th>Discapacidad</th>
                            </thead>
                            <tbody>
                                <tr *ngFor="let field of fieldMod; let i = index">
                                    <td>
                                         <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.nombres" [value]="field.nombres" class="form-control" type="text" />
                                    </td>
                                    <td>
                                         <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.parentesco" [value]="field.parentesco" class="form-control" type="text" />
                                    </td>
                                    <td>
                                        <select class="form-select" [(ngModel)]="selectMod[i]" [ngModelOptions]="{standalone: true}">
                                            <option value="Si" selected>Con Discapacidad</option>
                                            <option value="No">Sin Discapacidad</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button class="btn btn-alert" style="background-color: rgb(211, 76, 76); color: seashell;"
                                            type="button" (click)="deleteFieldMod(i)">Borrar</button>
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
export class DatosDependientesModal {
    date6: Date;
    dpForm: FormGroup;
    id_persona: any;
    selectDiscapacidad: any = {};

    fieldArray: Array<any> = [];
    fieldMod: Array<any> = [];
    selectMod: Array<any> = [];
    desabilitarBtn: boolean = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private _datosPersonalesService: DatosPersonalesService,
        private service: MessageService,
        private confirmationService: ConfirmationService,
        private ref: DynamicDialogRef

    ) {
        this.dpForm = this.fb.group({
            nombres: ["", Validators.required],
            parentesco: ["", Validators.required],
            discapacidad: ["", Validators.required]
        })
    }

    closeModal(): void {
        this.ref.close()
    }

    addFieldValue3() {
        this.fieldArray.push({
            nombres: this.dpForm.value.nombres,
            parentesco: this.dpForm.value.parentesco,
            discapacidad: this.selectDiscapacidad
        })
        this.dpForm.get('nombres').reset();
        this.dpForm.get('parentesco').reset();
        this.selectDiscapacidad = {};
    }

    deleteFieldValue3(index) {
        this.fieldArray.splice(index, 1);
    }

    deleteFieldMod(index) {
        console.log(index);
        let deleteId = this.fieldMod[index].id_dependientes;
        console.log(deleteId);
        this.confirm(deleteId)

    }
    desabilitar() {
        this.desabilitarBtn = false;
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(param => {
            console.log('param', param.id);
            this.id_persona = param.id;
            this._datosPersonalesService.getDependientesById(param.id).subscribe(res => {
                console.log('get by id', res);
                for (let i in res) {
                    this.fieldMod.push({
                        id_dependientes: res[i].id_dependientes,
                        id_personal: this.id_persona,
                        nombres: res[i].nombres,
                        parentesco: res[i].parentesco,
                    })
                    this.selectMod.push(res[i].discapacidad)
                }
            })
        })
    }

    onSubmitMod() {
        let c = 0;
        let array = []
        for (let i in this.fieldMod) {
            array.push({
                id_dependientes: this.fieldMod[i].id_dependientes,
                id_personal: this.fieldMod[i].id_personal,
                nombres: this.fieldMod[i].nombres,
                parentesco: this.fieldMod[i].parentesco,
                discapacidad: this.selectMod[i]
            })
        }
        console.log(array);
        for (let j in array) {
            c++;
            let body = {
                id_dependientes: this.fieldMod[j].id_dependientes,
                id_personal: this.fieldMod[j].id_personal,
                nombres: this.fieldMod[j].nombres,
                parentesco: this.fieldMod[j].parentesco,
                discapacidad: this.selectMod[j]
            }
            this._datosPersonalesService.putDependiente(body).subscribe(res => {
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
        var actualDate = moment()
        var date = moment(actualDate['_d']).format('YYYY-MM-DD')

        var aux = []
        this.fieldArray.forEach(res => {
            aux.push({
                "id_personal": this.id_persona,
                "nombres": res.nombres,
                "parentesco": res.parentesco,
                "discapacidad": res.discapacidad
            })
        })
        console.log('aux', aux);
        this._datosPersonalesService.postDependiente(aux).subscribe(res => {
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

    confirm(id) {
        let body = {
            "id_dependientes": id
        }
        console.log('body', body);
        this.confirmationService.confirm({
            message: 'Está seguro de eliminar el registro?',
            accept: () => {
                this._datosPersonalesService.deleteDependiente(body).subscribe(res => {
                    console.log(res);
                    this.service.add({ key: 'tst', severity: 'info', summary: 'Confirmado', detail: 'Registro eliminado' });
                    setTimeout(() => {
                        this.closeModal()
                    }, 1000)
                })
            },
            reject: () => {
                this.service.add({ key: 'tst', severity: 'error', summary: 'Cancelado', detail: 'No se eliminó el registro' });
            }
        });
    }
}