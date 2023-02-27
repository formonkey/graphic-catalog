import { HttpLink } from 'apollo-angular/http';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

const uri = 'http://localhost:8080/graphql';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
    return {
        link: httpLink.create({ uri }),
        cache: new InMemoryCache()
    };
}
