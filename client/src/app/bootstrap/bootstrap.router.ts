import { RouterModule } from '@angular/router';

export const BootstrapRouter = RouterModule.forRoot([
    {
        path: '',
        loadChildren: () => import('../pages/catalog').then(m => m.CatalogModule),
    },
    {
        path: ':id',
        loadChildren: () => import('../pages/detail').then(m => m.DetailModule),
    }
]);
