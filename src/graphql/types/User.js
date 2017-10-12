'use strict';

const GraphQL = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = GraphQL;


const UserType = new GraphQL.GraphQLObjectType({
  name: 'User',
  description: 'User type, for all the users associated with my commit works clients',

  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the user',
    },
    firstName: {
      type: GraphQLString,
      description: 'first name of the user',
    },
    lastName: {
      type: GraphQLString,
      description: 'lastName of the user',
    },

    company: {
      type: GraphQLString,
      description: 'The complete details of the company this user is related to.',
    },

    // this needs to be discussed. Should be an array of some sort

    // roles: {

    // }

  })

});


module.exports = UserType;

