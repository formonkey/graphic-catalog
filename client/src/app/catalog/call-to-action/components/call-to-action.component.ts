import { Component } from '@angular/core';
import { CatalogService } from '../../../pages/catalog';

@Component({
    selector: 'app-call-to-action',
    templateUrl: './call-to-action.component.html',
    styleUrls: [ './call-to-action.component.scss', ],
})

export class CallToActionComponent {
    constructor(
        private readonly catalogService: CatalogService,
    ) {
    }

    public handleSearchAction(value: any): void {
        this.catalogService.retrieveResultsBySearch(value);
    }
}
