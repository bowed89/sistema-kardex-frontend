import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { MenuService } from './Services/menu.service';


@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];
    ex: Array<any> = []

    constructor(
        public app: AppMainComponent,
        public _menuService: MenuService
    ) { }

    ngOnInit() {
        var idBody = {
            id: localStorage.getItem('id_grupo')
        }
        if (idBody.id == '3') {
            console.log('usuario funcionario');
            this._menuService.getMenuById(idBody).subscribe(res => {
                for (let i in res) {
                    this.ex.push({
                        label: res[i].nombre,
                        icon: res[i].icono,
                        routerLink: res[i].ruta
                    })
                }
                console.log(this.ex);
            })

        }
        if (idBody.id == '1') {
            console.log('usuario administrador');
            this._menuService.getAllMenu().subscribe(res => {
                for (let i in res) {
                    this.ex.push({
                        label: res[i].nombre,
                        icon: res[i].icono,
                        routerLink: res[i].ruta
                    })
                }
            })
        }

        /*         this._menuService.getAllMenu().subscribe(res => {
                    console.log("menu ==> ", res);
                    for (let i in res) {
                        this.ex.push({
                            label: res[i].nombre,
                            icon: res[i].icono,
                            routerLink: res[i].ruta
                        })
                    }
                }) */
    }
    onMenuClick() {
        this.app.menuClick = true;
    }
}


