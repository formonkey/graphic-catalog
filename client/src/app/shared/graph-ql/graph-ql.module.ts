import { NgModule } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';

import { createApollo } from './constants';


@NgModule({
    exports: [
        ApolloModule
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [ HttpLink ],
        },
    ],
})

export class GraphQLModule {
}
