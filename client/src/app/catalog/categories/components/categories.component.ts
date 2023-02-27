import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

import { CatalogService } from '../../../pages/catalog';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: [ './categories.component.scss', ],
})

export class CategoriesComponent implements OnInit {
    public categories: any = [];
    public selected: any = null;

    constructor(
        private readonly apollo: Apollo,
        private readonly catalogService: CatalogService,
    ) {
    }

    public ngOnInit(): void {
        this.catalogService.categories$.subscribe((val: any[]) => {
            this.categories = val;
        });
    }

    public selectCategory(category: any): void {
        this.selected = this.selected?.label === category.label ? null : category;

        if (this.selected) {
            this.catalogService.retrieveResultsByCategory(this.selected?.label);
        } else {
            this.catalogService.retrieveResults();
        }
    }
}
