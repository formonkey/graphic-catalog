import { NgModule } from '@angular/core';

import { ElementModule } from '../../elements';
import { CategoriesComponent } from './components';

@NgModule({
    imports: [
        ElementModule,
    ],
    declarations: [
        CategoriesComponent
    ],
    exports: [
        CategoriesComponent,
    ],
})

export class CategoriesModule {
}
