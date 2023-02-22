import { NgModule } from '@angular/core';

import { CatalogComponent } from './components';
import { CatalogRouter } from './catalog.router';

@NgModule({
    imports: [
        CatalogRouter,
    ],
    declarations: [
        CatalogComponent,
    ],
})

export class CatalogModule {
}
