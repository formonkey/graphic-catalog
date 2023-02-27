import { NgModule } from '@angular/core';

import { DetailService } from './services';
import { DetailComponent } from './components';
import { DetailRouter } from './detail.router';

@NgModule({
    imports: [
        DetailRouter,
    ],
    declarations: [
        DetailComponent,
    ],
    providers: [
        DetailService
    ]
})

export class DetailModule {
}
