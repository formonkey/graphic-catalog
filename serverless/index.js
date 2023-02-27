const cors = require('cors');
const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const DATA = require('./data.json');

const schema = buildSchema(`
  type Query {
    brands: [String],
    graphic(id: Int!): Graphic,
    search(search: String!, brand: String, page: Int): [Graphic],
    graphics(brand: String, search: String, page: Int): [Graphic],
  }
  type Graphic {
    id: ID,
    brand: String,
    model: String,
    memory: String,
    price: String,
    coreClock: String,
    boostClock: String,
    power: String,
    image: String,
  }
`);

const filterByBrandAndSearch = ({ brand, search, page = 1 }) => {
    const limit = 12;

    let data = DATA;

    if (brand) {
        data = data.filter((item) => item.brand === brand);
    }
    if (search) {
        data = data.filter((item) => item.model.toLowerCase().includes(search.toLowerCase()));
    }

    return data.slice(0, page * limit);
};

const rootValue = {
    search: filterByBrandAndSearch,
    graphics: filterByBrandAndSearch,
    graphic: ({ id }) => {
        return DATA.find((item) => item.id === id);
    },
    brands: () => {
        return [ ...new Set(DATA.map(graphic => graphic.brand)) ];
    },
};

const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema, rootValue, graphiql: { headerEditorEnabled: true },
}),);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Express GraphQL server running on http://localhost:${port}/graphql`);
});
