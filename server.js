const fetch = require('node-fetch');
const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

console.log(fetch);
const app = express();

const typeArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolverArray = loadFilesSync(path.join(__dirname, '**/*resolvers.js'));

const schema = makeExecutableSchema({
    typeDefs: typeArray,
    resolvers: resolverArray,
});

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(3001,()=>{
    console.log('Graphql Server is Running...');
});