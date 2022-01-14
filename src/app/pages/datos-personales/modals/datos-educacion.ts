import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { DatosPersonalesService } from 'src/app/Services/datos-personales.service';

@Component({
    template: ` 

        <div class="ui-g-12">
            <!-- etiqueta para los mensajes-->
            <p-toast key="tst" [style]="{marginTop: '70px'}"></p-toast>
            <p-confirmDialog header="Confirmation" icon="ui-icon-warning" [style]="{width: '425px'}"></p-confirmDialog>

            <div class="card card-w-title">
                <p-tabView [style]="{fontSize: '18px'}">
                    <!--LLENADO DE DATOS -->
                    <p-tabPanel header="Llenado Datos Educación" leftIcon="ui-icon-check">
                         <form [formGroup]="dpForm" (ngSubmit)="onSubmit()">
                            <!-- etiqueta para los mensajes-->
                                <table class="table table-striped table-bordered">
                                    <thead>
                                        <th>Grado Académico</th>
                                        <th>Nombre de la Carrera</th>
                                        <th>Nombre de Insitución/Universidad</th>
                                        <th>Fecha de Titulación</th>
                                        <th>Lugar de Titulación</th>
                                    </thead>
                                    <tbody>
                                        <tr *ngFor="let field of fieldArray; let i = index">
                                            <td>
                                                <select class="form-select" [(ngModel)]="field.titulo" [ngModelOptions]="{standalone: true}"
                                                        (change)="desabilitar()">
                                                        <option value="PRIMARIA" selected>PRIMARIA</option>
                                                        <option value="SECUNDARIA">SECUNDARIA</option>
                                                        <option value="BACHILLER">BACHILLER</option>
                                                        <option value="TECNICO MEDIO">TECNICO MEDIO</option>
                                                        <option value="TECNICO SUPERIOR">TECNICO SUPERIOR</option>
                                                        <option value="LICENCIATURA">LICENCIATURA</option>
                                                        <option value="DIPLOMADO">DIPLOMADO</option>
                                                        <option value="ESPECIALIDAD">ESPECIALIZACION</option>
                                                        <option value="MAESTRIA">MAESTRIA</option>
                                                        <option value="DOCTORADO">DOCTORADO</option>
                                                        <option value="POST DOCTORADO">POST DOCTORADO</option>
                                                        <option value="SEMINARIO-OTRO">SEMONARIOS U OTROS</option>

                                                    </select>
                                            </td>
                                            <td>
                                                <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.nombre_carrera" class="form-control"
                                                    type="text" />
                                            </td>
                                            <td>
                                                <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.nombre_instituto" class="form-control"
                                                    type="text" />
                                            </td>
                                            <td>
                                                <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.fecha_titulacion" class="form-control"
                                                    type="date" />
                                            </td>
                                            <td>
                                                <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.lugar_titulacion" class="form-control"
                                                    type="text" />
                                            </td>
                                            <td>
                                                <button class="btn btn-alert" style="background-color: rgb(211, 76, 76); color: seashell;"
                                                    type="button" (click)="deleteFieldValue3(i)">Borrar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <select class="form-select" [(ngModel)]="selectDiscapacidad" [ngModelOptions]="{standalone: true}"
                                                    (change)="desabilitar()">
                                                    <option value="PRIMARIA" selected>PRIMARIA</option>
                                                    <option value="SECUNDARIA">SECUNDARIA</option>
                                                    <option value="BACHILLER">BACHILLER</option>
                                                    <option value="TECNICO MEDIO">TECNICO MEDIO</option>
                                                    <option value="TECNICO SUPERIOR">TECNICO SUPERIOR</option>
                                                    <option value="LICENCIATURA">LICENCIATURA</option>
                                                    <option value="DIPLOMADO">DIPLOMADO</option>
                                                    <option value="ESPECIALIDAD">ESPECIALIZACIÓN</option>
                                                    <option value="MAESTRIA">MAESTRIA</option>
                                                    <option value="DOCTORADO">DOCTORADO</option>
                                                    <option value="POST DOCTORADO">POST DOCTORADO</option>
                                                    <option value="SEMINARIO-OTRO">SEMONARIOS U OTROS</option>

                                                </select>
                                            </td>
                                            <td>
                                                <input class="form-control" type="text" placeholder="Carrera" formControlName="nombre_carrera" required>
                                            </td>   <td>
                                                <input class="form-control" type="text" placeholder="Insitución/Universidad" formControlName="nombre_instituto" required>
                                            </td>   
                                            <td>
                                                <input class="form-control" type="date" placeholder="Fecha" formControlName="fecha_titulacion" required>
                                            </td>
                                            <td>
                                                <input class="form-control" type="text" placeholder="Lugar" formControlName="lugar_titulacion" required>
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
                    <!-- MODIFICACION DE DATOS -->
                    <p-tabPanel header="Modificación Datos Educación" leftIcon="ui-icon-check">
                        <table class="table table-striped table-bordered">
                            <thead>
                                <th>Grado Académico</th>
                                <th>Nombre de la Carrera</th>
                                <th>Nombre de Insitución/Universidad</th>
                                <th>Fecha de Titulación</th>
                                <th>Lugar de Titulación</th>
                            </thead>
                            <tbody>
                                <tr *ngFor="let field of fieldMod; let i = index">
                                    <td>
                                        <select class="form-select"[(ngModel)]="selectMod[i]" [ngModelOptions]="{standalone: true}"
                                                (change)="desabilitar()">
                                                <option value="PRIMARIA" selected>PRIMARIA</option>
                                                <option value="SECUNDARIA">SECUNDARIA</option>
                                                <option value="BACHILLER">BACHILLER</option>
                                                <option value="TECNICO MEDIO">TECNICO MEDIO</option>
                                                <option value="TECNICO SUPERIOR">TECNICO SUPERIOR</option>
                                                <option value="LICENCIATURA">LICENCIATURA</option>
                                                <option value="DIPLOMADO">DIPLOMADO</option>
                                                <option value="ESPECIALIDAD">ESPECIALIZACION</option>
                                                <option value="MAESTRIA">MAESTRIA</option>
                                                <option value="DOCTORADO">DOCTORADO</option>
                                                <option value="POST DOCTORADO">POST DOCTORADO</option>
                                                <option value="SEMINARIO-OTRO">SEMONARIOS U OTROS</option>


                                            </select>
                                    </td>
                                    <td>
                                        <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.nombre_carrera" [value]="field.nombre_carrera" class="form-control"
                                            type="text" />
                                    </td>
                                    <td>
                                        <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.nombre_instituto" [value]="field.nombre_instituto" class="form-control"
                                            type="text" />
                                    </td>
                                    <td>
                                        <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.fecha_titulacion" [value]="field.fecha_titulacion" class="form-control"
                                            type="date" />
                                    </td>
                                    <td>
                                        <input [ngModelOptions]="{standalone: true}" [(ngModel)]="field.lugar_titulacion" [value]="field.lugar_titulacion" class="form-control"
                                            type="text" />
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
                                    <button type="button" label="Modificar"  (click)="onSubmitMod()" icon="ui-icon-person" class="ui-button-success" pButton></button>
                                </div>
                            </div>
                        </p-footer>
                        <!-- FIN DE MODIFICACION DE DATOS -->

                    </p-tabPanel>
                </p-tabView>
            </div>
        </div>

    
    
    `,
    providers: [MessageService, DialogService, ConfirmationService]
})
export class DatosEducacionModal {
    date6: Date;
    dpForm: FormGroup;
    id_persona: any;

    fieldMod: Array<any> = [];
    fieldArray: Array<any> = [];

    selectMod: Array<any> = [];
    desabilitarBtn: boolean = true;
    selectDiscapacidad: any = {};

    constructor(
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private _datosPersonalesService: DatosPersonalesService,
        private service: MessageService,
        private confirmationService: ConfirmationService,
        private ref: DynamicDialogRef

    ) {
        this.dpForm = this.fb.group({
            id_personal: ["", Validators.required],
            titulo: ["", Validators.required],
            nombre_carrera: ["", Validators.required],
            nombre_instituto: ["", Validators.required],
            fecha_titulacion: ["", Validators.required],
            lugar_titulacion: ["", Validators.required]
        })
    }

    closeModal(): void {
        this.ref.close()
    }

    addFieldValue3() {
        this.fieldArray.push({
            id_personal: this.id_persona,
            titulo: this.selectDiscapacidad,
            nombre_carrera: this.dpForm.value.nombre_carrera,
            nombre_instituto: this.dpForm.value.nombre_instituto,
            fecha_titulacion: this.dpForm.value.fecha_titulacion,
            lugar_titulacion: this.dpForm.value.lugar_titulacion,

        })
        this.dpForm.get('titulo').reset();
        this.dpForm.get('nombre_carrera').reset();
        this.dpForm.get('nombre_instituto').reset();
        this.dpForm.get('fecha_titulacion').reset();
        this.dpForm.get('lugar_titulacion').reset();
        this.selectDiscapacidad = {};
    }

    deleteFieldValue3(index) {
        this.fieldArray.splice(index, 1);
    }

    deleteFieldMod(index) {
        console.log(index);
        let deleteId = this.fieldMod[index].id_formacion;
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
            this._datosPersonalesService.getEducacionById(this.id_persona).subscribe(res => {
                console.log('get by id', res);
                for (let i in res) {
                    this.fieldMod.push({
                        id_formacion: res[i].id_formacion,
                        id_personal: this.id_persona,
                        nombre_carrera: res[i].nombre_carrera,
                        nombre_instituto: res[i].nombre_instituto,
                        fecha_titulacion: res[i].fecha_titulacion,
                        lugar_titulacion: res[i].lugar_titulacion
                    })
                    this.selectMod.push(res[i].titulo)
                }
            })
        })
    }

    onSubmitMod() {
        let c = 0;
        let array = []
        for (let i in this.fieldMod) {
            array.push({
                id_formacion: this.fieldMod[i].id_formacion,
                id_personal: this.fieldMod[i].id_personal,
                titulo: this.selectMod[i],
                nombre_carrera: this.fieldMod[i].nombre_carrera,
                nombre_instituto: this.fieldMod[i].nombre_instituto,
                fecha_titulacion: this.fieldMod[i].fecha_titulacion,
                lugar_titulacion: this.fieldMod[i].lugar_titulacion,
            })
        }
        console.log(array);

        for (let j in array) {
            c++;
            let body = {
                id_formacion: this.fieldMod[j].id_formacion,
                id_personal: this.fieldMod[j].id_personal,
                titulo: this.selectMod[j],
                nombre_carrera: this.fieldMod[j].nombre_carrera,
                nombre_instituto: this.fieldMod[j].nombre_instituto,
                fecha_titulacion: this.fieldMod[j].fecha_titulacion,
                lugar_titulacion: this.fieldMod[j].lugar_titulacion,
            }

            this._datosPersonalesService.putEducacion(body).subscribe(res => {
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
        console.log('this.dpForm.value', this.fieldArray);
        this._datosPersonalesService.postEducacion(this.fieldArray).subscribe(res => {
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
            "id_formacion": id
        }
        this.confirmationService.confirm({
            message: 'Está seguro de eliminar el registro?',
            accept: () => {
                console.log(body);
                this._datosPersonalesService.deleteEducacion(body).subscribe(res => {
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