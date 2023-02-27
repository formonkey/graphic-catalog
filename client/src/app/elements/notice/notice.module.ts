import { NgModule } from '@angular/core';

import { NoticeComponent } from './components';
import { ContainerModule } from '../container';

@NgModule({
    imports: [
        ContainerModule,
    ],
    declarations: [
        NoticeComponent,
    ],
    exports: [
        NoticeComponent,
    ],
})

export class NoticeModule {
}
