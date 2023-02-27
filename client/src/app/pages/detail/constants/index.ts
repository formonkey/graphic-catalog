import { gql } from 'apollo-angular';

export const GQL = {
    DETAIL: gql`
        query($id: Int!) {
            graphic(id: $id) {
                id,
                brand,
                model,
                image,
                price,
                coreClock,
                boostClock,
                power,
                memory
            }
        }
    `,
};
