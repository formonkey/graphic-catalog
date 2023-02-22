import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BootstrapComponent } from './components';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
