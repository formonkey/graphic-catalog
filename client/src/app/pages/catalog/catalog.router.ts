import { RouterModule } from '@angular/router';

import { CatalogComponent } from './components';

export const CatalogRouter = RouterModule.forChild([
    {
        path: '',
        component: CatalogComponent,
    },
]);
