import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeModule } from './notice';
import { NavbarModule } from './navbar';
import { FooterModule } from './footer';
import { SearchModule } from './search';
import { CookiesModule } from './cookies';
import { ContainerModule } from './container';

const ELEMENTS = [
    CommonModule,

    NoticeModule,
    NavbarModule,
    FooterModule,
    SearchModule,
    CookiesModule,
    ContainerModule,
];

@NgModule({
    imports: ELEMENTS,
    exports: ELEMENTS,
})

export class ElementModule {
}
