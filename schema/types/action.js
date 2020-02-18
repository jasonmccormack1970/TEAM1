const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');

const pgdb = require('../../database/pgdb');

module.exports = new GraphQLObjectType({
    name: 'ActionType',
    fields: {
        id: { type: GraphQLID },
        action_code: { type: GraphQLString },
        action: { type: GraphQLString },
    },
});

