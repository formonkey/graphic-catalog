import { RouterModule } from '@angular/router';

import { DetailComponent } from './components';

export const DetailRouter = RouterModule.forChild([
    {
        path: '',
        component: DetailComponent,
    }
]);
