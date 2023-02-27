import { NgModule } from '@angular/core';

import { CatalogService } from './services';
import { CatalogComponent } from './components';
import { CatalogRouter } from './catalog.router';
import { CallToActionModule, CategoriesModule, ResultsModule } from '../../catalog';

@NgModule({
    imports: [
        CatalogRouter,

        CategoriesModule,
        CallToActionModule,
        ResultsModule,
    ],
    declarations: [
        CatalogComponent,
    ],
    providers: [
        CatalogService,
    ],
})

export class CatalogModule {
}
