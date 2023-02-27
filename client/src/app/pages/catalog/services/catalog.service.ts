import { BehaviorSubject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { GQL, GRAPHIC_CATEGORIES } from '../constants';

@Injectable()
export class CatalogService {
    private readonly results = new BehaviorSubject<any>([]);
    public results$ = this.results.asObservable();

    private readonly categories = new BehaviorSubject<any>([]);
    public categories$ = this.categories.asObservable();

    private brand = '';
    private search = '';

    constructor(
        private readonly apollo: Apollo,
    ) {
    }

    public retrieveResultsByCategory(brand: string): void {
        this.brand = brand;

        this.apollo.watchQuery({
            query: GQL.RESULTS_BY_CATEGORY,
            variables: {
                brand,
                page: 1,
                search: this.search,
            },
        }).valueChanges.subscribe((result: any) => {
            this.results.next(result.data.graphics);
        });
    }

    public retrieveResultsBySearch(search: string): void {
        this.search = search;

        this.apollo.watchQuery({
            query: GQL.RESULTS_BY_SEARCH,
            variables: {
                search,
                page: 1,
                brand: this.brand,
            },
        }).valueChanges.subscribe((result: any) => {
            this.results.next(result.data.search);
        });
    }

    public retrieveResultsByPage(page: number): void {
        this.apollo.watchQuery({
            query: GQL.RESULTS_BY_SEARCH,
            variables: {
                page,
                brand: this.brand,
                search: this.search,
            },
        }).valueChanges.subscribe((result: any) => {
            this.results.next(result.data.search);
        });
    }

    public retrieveCategories(): void {
        this.apollo.watchQuery({
            query: GQL.CATEGORIES,
        }).valueChanges.subscribe((result: any) => {
            this.categories.next(result.data.brands.map((brand: string, i: number) => ({
                ...GRAPHIC_CATEGORIES[i],
                label: brand,
            })));
        });
    }

    public retrieveResults(): void {
        this.apollo.watchQuery({
            query: GQL.RESULTS,
        }).valueChanges.subscribe((result: any) => {
            this.results.next(result.data.graphics);
        });
    }
}
