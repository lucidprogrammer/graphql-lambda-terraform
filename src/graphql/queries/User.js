'use strict';

const GraphQL = require('graphql');
const {
	GraphQLList,
	GraphQLString,
	GraphQLNonNull,
} = GraphQL;

// import the User type we created
const UserType = require('../types/User');

// import the User resolver we created
const UserResolver = require('../resolvers/User');


module.exports = {

	index() {
		return {
			type: new GraphQLList(UserType),
			description: 'This index query action should return all the users',
			args: {},
			resolve(parent, args, context, info) {
				return UserResolver.index(args);
			}
		}
	},

};

