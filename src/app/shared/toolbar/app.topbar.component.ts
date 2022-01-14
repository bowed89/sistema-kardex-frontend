import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import {AppMainComponent} from '../../app.main.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    user: any = {};

    constructor(public app: AppMainComponent,
                public router: Router,
                public usuarioService: UsuarioService ) {}

    ngOnInit(): void {

        let datos = JSON.parse(localStorage.getItem('nombre'));
/*         this.user = datos.user;
        console.log(this.user) */

        // JSON.parse(localStorage.getItem('nombre'))
     
    }

    logout() {
        this.router.navigate(['/login']);
        this.usuarioService.logout();
    }
}
