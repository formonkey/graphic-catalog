import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookiesComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CookiesComponent,
    ],
    exports: [
        CookiesComponent,
    ]
})

export class CookiesModule {
}
