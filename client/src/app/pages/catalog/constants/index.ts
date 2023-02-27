import { gql } from 'apollo-angular';

export const GQL = {
    CATEGORIES: gql`
        query {
            brands
        }
    `,
    RESULTS: gql`
        query {
            graphics {
                id,
                brand,
                model,
                image,
                price,
            }
        }
    `,
    RESULTS_BY_CATEGORY: gql`
        query($brand: String!, $search: String, $page: Int) {
            graphics(brand: $brand, search: $search, page: $page) {
                id,
                brand,
                model,
                image,
                price,
            }
        }
    `,
    RESULTS_BY_SEARCH: gql`
        query($search: String!, $brand: String, $page: Int) {
            search(search: $search, brand: $brand, page: $page) {
                id,
                brand,
                model,
                image,
                price,
            }
        }
    `
};

export const GRAPHIC_CATEGORIES = [
    {
        icon: 'fa-regular fa-floppy-disk'
    },
    {
        icon: 'fa-regular fa-hand-spock'
    },
    {
        icon: 'fa-regular fa-hand-peace'
    },
    {
        icon: 'fa-regular fa-handshake'
    },
    {
        icon: 'fa-regular fa-keyboard'
    },
    {
        icon: 'fa-regular fa-hand-point-up'
    },
    {
        icon: 'fa-regular fa-object-group'
    },
    {
        icon: 'fa-regular fa-hand-lizard'
    },
    {
        icon: 'fa-regular fa-hand-back-fist'
    }
];
