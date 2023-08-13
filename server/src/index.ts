import parser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
import express from 'express'
import cors from 'cors'

import myGraphQLSchema from './schema/index.js'

const server = new ApolloServer(myGraphQLSchema);

const app = express();

// to access graphql API from the client side
app.use(cors({}))

await server.start()

app.use('/graphql', cors(), parser.json(), expressMiddleware(server));

const port = process.env.PORT || 8001
app.listen(port, (err) => {
    if (err) throw err
    console.log(`Graphql Server started on: http://localhost:${port}`)
})

