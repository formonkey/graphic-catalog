import { NgModule } from '@angular/core';

import { ContainerModule } from '../container';
import { FooterComponent } from './components';

@NgModule({
    imports: [
        ContainerModule,
    ],
    declarations: [
        FooterComponent,
    ],
    exports: [
        FooterComponent,
    ],
})

export class FooterModule {
}
