import { NgModule } from '@angular/core';

import { NavbarComponent } from './components';
import { ContainerModule } from '../container';

@NgModule({
    imports: [
        ContainerModule,
    ],
    declarations: [
        NavbarComponent,
    ],
    exports: [
        NavbarComponent,
    ],
})

export class NavbarModule {
}
