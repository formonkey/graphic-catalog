import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GraphQLModule } from '../shared';
import { ElementModule } from '../elements';
import { BootstrapComponent } from './components';
import { BootstrapRouter } from './bootstrap.router';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        HttpClientModule,

        BootstrapRouter,

        ElementModule,
        GraphQLModule,
    ],
    declarations: [
        BootstrapComponent,
    ],
    bootstrap: [
        BootstrapComponent,
    ]
})

export class BootstrapModule {
}
