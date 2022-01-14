import {Component, OnInit} from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <div class="layout-config" [ngClass]="{'layout-config-active': app.configActive}" (click)="app.onConfigClick($event)">
            <div class="layout-config-content">
                <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                    <i class="material-icons">settings</i>
                </a>
                <a style="cursor: pointer" class="layout-config-close" (click)="onConfigCloseClick($event)">
                    <i class="material-icons">clear</i>
                </a>
                <p-tabView>
                    <p-tabPanel header="Menu">
                        <h1>Menu Modes</h1>
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.layoutMode = 'overlay'">
                                    <img src="assets/layout/images/configurator/menu/serenity-overlay.png" alt="serenity"/>
                                    <i class="ui-icon-check" *ngIf="app.layoutMode === 'overlay' || app.layoutMode === 'static'"></i>
                                </a>
                                <span>Vertical</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.layoutMode = 'horizontal'">
                                    <img src="assets/layout/images/configurator/menu/serenity-horizontal.png" alt="serenity"/>
                                    <i class="ui-icon-check" *ngIf="app.layoutMode === 'horizontal'"></i>
                                </a>
                                <span>Horizontal</span>
                            </div>
                        </div>
                        <h1>Menu Colors</h1>
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.darkMenu = true">
                                    <img src="assets/layout/images/configurator/menu/serenity-dark.png" alt="serenity"/>
                                    <i class="ui-icon-check" *ngIf="this.app.darkMenu"></i>
                                </a>
                                <span>Dark</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.darkMenu = false">
                                    <img src="assets/layout/images/configurator/menu/serenity-overlay.png" alt="serenity"/>
                                    <i class="ui-icon-check" *ngIf="!app.darkMenu"></i>
                                </a>
                                <span>Light</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Orientation">
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.isRTL = false">
                                    <img src="assets/layout/images/configurator/menu/serenity-overlay.png" alt="serenity"/>
                                    <i class="ui-icon-check" *ngIf="!app.isRTL"></i>
                                </a>
                                <span>LTR</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.isRTL = true">
                                    <img src="assets/layout/images/configurator/menu/serenity-rtl.png" alt="serenity"/>
                                    <i class="ui-icon-check" *ngIf="app.isRTL"></i>
                                </a>
                                <span>RTL</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Layout">
                        <h1>Flat</h1>
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let flatLayoutColor of flatLayoutColors">
                                <a style="cursor: pointer" class="layout-config-layout-option"
                                   (click)="changeLayout(flatLayoutColor.label)">
                                    <img src="assets/layout/images/configurator/layout/flat/{{flatLayoutColor.image}}.png" alt="serenity"/>
                                    <i class="ui-icon-check" *ngIf="layout === flatLayoutColor.label"></i>
                                </a>
                            </div>
                        </div>
                        <h1>Special</h1>
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let specialLayoutColor of specialLayoutColors">
                                <a style="cursor: pointer" class="layout-config-layout-option"
                                   (click)="changeLayout(specialLayoutColor.label)">
                                    <img src="assets/layout/images/configurator/layout/special/{{specialLayoutColor.image}}.png"
                                         alt="serenity"/>
                                    <i class="ui-icon-check" *ngIf="layout === specialLayoutColor.label"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Themes">
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let theme of themes">
                                <a style="cursor: pointer" class="layout-config-option" (click)="changeTheme(theme.label)">
                                    <img src="assets/layout/images/configurator/theme/{{theme.image}}.svg" alt="serenity"/>
                                    <i class="ui-icon-check" *ngIf="themeColor === theme.label"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                </p-tabView>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    themes: any[];

    themeColor = 'bluegrey';

    layout = 'moody';

    flatLayoutColors: any[];

    specialLayoutColors: any[];

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.flatLayoutColors = [
            {image: 'bluegrey-green', label: 'bluegrey'},
            {image: 'indigo-pink', label: 'indigo'},
            {image: 'pink-amber', label: 'pink'},
            {image: 'deeppurple-orange', label: 'deeppurple'},
            {image: 'blue-amber', label: 'blue'},
            {image: 'lightblue-bluegrey', label: 'lightblue'},
            {image: 'cyan-amber', label: 'cyan'},
            {image: 'teal-red', label: 'teal'},
            {image: 'green-brown', label: 'green'},
            {image: 'lightgreen-purple', label: 'lightgreen'},
            {image: 'lime-bluegrey', label: 'lime'},
            {image: 'yellow-teal', label: 'yellow'},
            {image: 'amber-pink', label: 'amber'},
            {image: 'orange-indigo', label: 'orange'},
            {image: 'deeporange-cyan', label: 'deeporange'},
            {image: 'brown-cyan', label: 'brown'},
            {image: 'grey-indigo', label: 'grey'}
        ];
        this.specialLayoutColors = [
            {image: 'reflection', label: 'reflection'},
            {image: 'moody', label: 'moody'},
            {image: 'cityscape', label: 'cityscape'},
            {image: 'cloudy', label: 'cloudy'},
            {image: 'storm', label: 'storm'},
            {image: 'palm', label: 'palm'},
            {image: 'flatiron', label: 'flatiron'}
        ];
        this.themes = [
            {image: 'bluegrey-green', label: 'bluegrey'},
            {image: 'indigo-pink', label: 'indigo'},
            {image: 'pink-amber', label: 'pink'},
            {image: 'purple-pink', label: 'purple'},
            {image: 'deeppurple-orange', label: 'deeppurple'},
            {image: 'blue-amber', label: 'blue'},
            {image: 'lightblue-bluegrey', label: 'lightblue'},
            {image: 'cyan-amber', label: 'cyan'},
            {image: 'teal-red', label: 'teal'},
            {image: 'green-brown', label: 'green'},
            {image: 'lightgreen-purple', label: 'lightgreen'},
            {image: 'lime-bluegrey', label: 'lime'},
            {image: 'yellow-teal', label: 'yellow'},
            {image: 'amber-pink', label: 'amber'},
            {image: 'orange-indigo', label: 'orange'},
            {image: 'deeporange-cyan', label: 'deeporange'},
            {image: 'brown-cyan', label: 'brown'},
            {image: 'grey-indigo', label: 'grey'}
        ];
    }

    changeTheme(theme) {
        this.themeColor = theme;
        this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');
    }

    changeLayout(layout) {
        this.layout = layout;
        this.changeStyleSheetsColor('layout-css', 'layout-' + layout + '.css');
    }

    changeStyleSheetsColor(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = value;

        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    onConfigButtonClick(event) {
        this.app.configActive = !this.app.configActive;
        event.preventDefault();
    }

    onConfigCloseClick(event) {
        this.app.configActive = false;
        event.preventDefault();
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }
}
