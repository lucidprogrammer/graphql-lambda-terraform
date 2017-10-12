'use strict';

const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLSchema,
} = GraphQL;


// import the user query file we created
const UserQuery = require('./queries/User');


// lets define our root query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'This is the default root query',
	fields: {
		users: UserQuery.index(),
	},
});


// export the schema
module.exports = new GraphQLSchema({
	query: RootQuery,
});
