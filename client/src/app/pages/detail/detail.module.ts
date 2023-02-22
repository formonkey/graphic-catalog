import { NgModule } from '@angular/core';

import { DetailComponent } from './components';
import { DetailRouter } from './detail.router';

@NgModule({
    imports: [
        DetailRouter,
    ],
    declarations: [
        DetailComponent,
    ]
})

export class DetailModule {
}
