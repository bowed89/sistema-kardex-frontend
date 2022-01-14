import {Component} from '@angular/core';
import {BreadcrumbService} from '../../services/breadcrumb.service';

@Component({
    templateUrl: './documentation.component.html',
    styles: [`
		.docs pre.doc-command {
			font-family: monospace;
			background-color: #0C2238;
			color: #ffffff;
			padding: 1em;
			font-size: 14px;
			border-radius: 3px;
			overflow: auto;
		}

		.docs p,
		.docs li{
			line-height: 1.5;
		}

		.docs i {
			background: #f1daad;
			font-family: monaco,Consolas,Lucida Console,monospace;
			font-weight: 700;
			padding: 2px 4px;
			letter-spacing: .5px;
			font-style: normal;
			color: #424242;
			border-radius: 4px;
		}
        `
    ]
})
export class DocumentationComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Documentation'}
        ]);
    }

}
