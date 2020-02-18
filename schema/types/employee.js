const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');

const pgdb = require('../../database/pgdb');

module.exports = new GraphQLObjectType({
    name: 'EmployeeType',
    fields: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        fullName: {
            type: GraphQLString,
            resolve: (obj) => `${obj.firstName} ${obj.lastName}`,
        },
        email: { type: new GraphQLNonNull(GraphQLString) },
        employeeRole: {type:GraphQLString }     
    },
});
