import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

import { CatalogService } from '../../../pages/catalog';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: [ './results.component.scss', ],
})

export class ResultsComponent implements OnInit {
    public data: any;

    constructor(
        private readonly apollo: Apollo,
        private readonly catalogService: CatalogService,
    ) {
    }

    public ngOnInit(): void {
        this.catalogService.results$.subscribe((val: any[]) => {
            this.data = val;
        });
    }
}
