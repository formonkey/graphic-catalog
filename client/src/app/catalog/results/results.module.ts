import { NgModule } from '@angular/core';

import { ElementModule } from '../../elements';
import { ResultsCardComponent, ResultsComponent } from './components';

@NgModule({
    imports: [
        ElementModule,
    ],
    declarations: [
        ResultsComponent,
        ResultsCardComponent,
    ],
    exports: [
        ResultsComponent,
    ],
})

export class ResultsModule {
}
