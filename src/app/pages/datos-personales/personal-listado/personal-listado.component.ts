import { Component, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/Services/datos-personales.service';

import { SelectItem } from 'primeng/primeng';

import * as moment from 'moment';

@Component({
  selector: 'app-personal',
  templateUrl: './personal-listado.component.html',
  styleUrls: ['./personal-listado.component.css']
})
export class PersonalListadoComponent implements OnInit {
  cols: any[];
  personal: any;
  selectedCar: any;
  getCuadros: any;
  dialogVisible: boolean;
  datosFiltr: Array<any> = []

  //dropdown
  selectedCity1: any;
  extension: SelectItem[];

  constructor(
    private _datosPersonalesService: DatosPersonalesService
  ) { }

  ngOnInit(): void {
    // Dropdown PrimeNG
    this.extension = [];
    this.extension.push(
      { label: 'Seleccionar Extensión', value: null },
      { label: 'LA PAZ', value: 'LP' },
      { label: 'COCHAMBAMBA', value: 'CBBA' },
      { label: 'SANTA CRUZ', value: 'SCZ' }
    )


    // this.cities2 = this.cities1.slice(1, 6);

    // nombres de columnas de las tablas
    this.cols = [
      { field: 'ci', header: 'DOCUMENTO DE IDENTIDAD' },
      { field: 'ap_paterno', header: 'AP. PATERNO' },
      { field: 'ap_materno', header: 'AP. MATERNO' },
      { field: 'nombres', header: 'NOMBRES' },
      { field: 'sexo', header: 'GENERO' },
      { field: 'fecha_nacimiento', header: 'FECHA NACIMIENTO' },
      { field: 'edad', header: 'EDAD' },
      { field: 'telefono', header: 'TELEFONO' },
      { field: 'fecha_sipase', header: 'FECHA SIPASE' },
      { field: 'fecha_rejap', header: 'FECHA REJAP' },
      { field: 'idioma', header: 'IDIOMA' },
      { field: 'libreta', header: 'LIBRETA MILITAR' },
      { field: 'politicas_publicas', header: 'POLITICAS PUBLICAS' },
      { field: 'certificado_1178', header: '1178' },
      { field: 'funcion_publica', header: 'RESP. FUNCION PUBLICA' },
      { field: 'direccion_puesto', header: 'DIRECCION DEL PUESTO' },
      { field: 'denominacion_puesto', header: 'DENOMINACION DEL PUESTO' },

      // { field: '', header: 'OPCIONES' },
    ];
    this._datosPersonalesService.getAllPersonal().subscribe(res => {
      let nombre;
      this.personal = res;
      let edades = [];
      console.log(this.personal);
      for (let i in res) {
        var a = moment();
        var b = moment(a.toISOString());
        var fechaNac = moment(res[i].fecha_nacimiento)
        var difEdad = b.diff(fechaNac, 'years')
        edades.push(difEdad)
      }
      // agrega otro campo de 'edad' en 'this.personal'
      this.personal.forEach((element, index) => {
        console.log(index);
        element.edad = edades[index]
      });
      // agregar fecha sipase en 'this.personal'
      this.personal.forEach((el) => {
        let body = {
          id: el.id_personal,
          nombre: 'SIPASE'
        }
        this._datosPersonalesService.getdocumentoid(body).subscribe(resp => {
          console.log(resp);
          if (Object.keys(resp).length > 0) {
            for (let i in this.personal) {
              if (this.personal[i].id_personal == resp[0].id_personal) {
                this.personal[i].fecha_sipase = resp[0].fecha_registro
              }
            }
          }
        })
      })
      // agregar fecha rejap en 'this.personal'
      this.personal.forEach((el) => {
        let body = {
          id: el.id_personal,
          nombre: 'REJAP'
        }
        this._datosPersonalesService.getdocumentoid(body).subscribe(resp => {
          console.log(resp);
          if (Object.keys(resp).length > 0) {
            for (let i in this.personal) {
              if (this.personal[i].id_personal == resp[0].id_personal) {
                this.personal[i].fecha_rejap = resp[0].fecha_registro
              }
            }
          }
        })
      })

      // agregar idioma nativo en 'this.personal'
      this.personal.forEach(el => {
        nombre = `${el.ap_paterno} ${el.ap_materno} ${el.nombres}`
        let findUrl = {
          url: `../Uploads/${nombre}/IDIOMA NATIVO`
        }
        console.log('findUrl', findUrl);
        this._datosPersonalesService.getPersonalImg(findUrl).subscribe(res => {

          if (res.fileNames2 == undefined) {
            console.log('entra a undefined');
            el.idioma = 'NO'

          } else {
            console.log('entra a no undefined');
            console.log(res);
            console.log('res ==> ', (res.fileNames2).length);
            if ((res.fileNames2).length > 0) {
              el.idioma = 'SI'
            } else {
              el.idioma = 'NO'
            }
          }
        })
      })

      // agregar libreta militar en 'this.personal'
      this.personal.forEach(el => {
        nombre = `${el.ap_paterno} ${el.ap_materno} ${el.nombres}`
        let findUrl = {
          url: `../Uploads/${nombre}/LIBRETA MILITAR`
        }
        console.log('findUrl', findUrl);
        this._datosPersonalesService.getPersonalImg(findUrl).subscribe(res => {
          if (res.fileNames2 == undefined) {
            console.log('entra a undefined');
            el.libreta = 'NO'

          } else {
            console.log('entra a no undefined');
            console.log(res);
            console.log('res ==> ', (res.fileNames2).length);
            if ((res.fileNames2).length > 0) {
              el.libreta = 'SI'
            } else {
              el.libreta = 'NO'
            }
          }
        })
      })

      // agregar politicas publicas en 'this.personal'
      this.personal.forEach(el => {
        nombre = `${el.ap_paterno} ${el.ap_materno} ${el.nombres}`
        let findUrl = {
          url: `../Uploads/${nombre}/CERTIFICADO POLITICAS PUBLICAS CENCAP-EGPP`
        }
        console.log('findUrl', findUrl);
        this._datosPersonalesService.getPersonalImg(findUrl).subscribe(res => {

          if (res.fileNames2 == undefined) {
            console.log('entra a undefined');
            el.politicas_publicas = 'NO'

          } else {
            console.log('entra a no undefined');
            console.log(res);
            console.log('res ==> ', (res.fileNames2).length);
            if ((res.fileNames2).length > 0) {
              el.politicas_publicas = 'SI'
            } else {
              el.politicas_publicas = 'NO'
            }
          }
        })
      })

      // agregar 1178 en 'this.personal'
      this.personal.forEach(el => {
        nombre = `${el.ap_paterno} ${el.ap_materno} ${el.nombres}`
        let findUrl = {
          url: `../Uploads/${nombre}/CERTIFICADO 1178 CENCAP-EGPP`
        }
        console.log('findUrl', findUrl);
        this._datosPersonalesService.getPersonalImg(findUrl).subscribe(res => {

          if (res.fileNames2 == undefined) {
            console.log('entra a undefined');
            el.certificado_1178 = 'NO'

          } else {
            console.log('entra a no undefined');
            console.log(res);
            console.log('res ==> ', (res.fileNames2).length);
            if ((res.fileNames2).length > 0) {
              el.certificado_1178 = 'SI'
            } else {
              el.certificado_1178 = 'NO'
            }
          }
        })
      })

      // agregar res funcion publica en 'this.personal'
      this.personal.forEach(el => {
        nombre = `${el.ap_paterno} ${el.ap_materno} ${el.nombres}`
        let findUrl = {
          url: `../Uploads/${nombre}/CERTIFICADO RESP. FUNCION PUBLICA CENCAP-EGPP`
        }
        console.log('findUrl', findUrl);
        this._datosPersonalesService.getPersonalImg(findUrl).subscribe(res => {

          if (res.fileNames2 == undefined) {
            console.log('entra a undefined');
            el.funcion_publica = 'NO'

          } else {
            console.log('entra a no undefined');
            console.log(res);
            console.log('res ==> ', (res.fileNames2).length);
            if ((res.fileNames2).length > 0) {
              el.funcion_publica = 'SI'
            } else {
              el.funcion_publica = 'NO'
            }
          }
        })
      })

      console.log('this.personal', this.personal);
    })

  }

  //excel button click functionality
  exportExcel() {
    console.log('dt =>', this.datosFiltr);

    if (this.datosFiltr == undefined || this.datosFiltr == null) {
      this.datosFiltr = []
    }
    if (Object.keys(this.datosFiltr).length > 0) {
      console.log('entra a xls filtrado');
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.datosFiltr); // Sale Data
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "listado-personal");
      });
    } else {
      console.log('entra a xls filtradoprimera vez');
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.personal); // Sale Data
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "listado-personal");
      });
    }
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(
        data,
        fileName + "_exportar_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }

  datosFiltrados(dt) {
    this.datosFiltr = dt.filteredValue
  }
  closeAdd() {

  }

}
