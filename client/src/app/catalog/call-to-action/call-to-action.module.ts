import { NgModule } from '@angular/core';

import { ElementModule } from '../../elements';
import { CallToActionComponent } from './components';

@NgModule({
    imports: [
        ElementModule,
    ],
    declarations: [
        CallToActionComponent,
    ],
    exports: [
        CallToActionComponent,
    ],
})

export class CallToActionModule {
}
