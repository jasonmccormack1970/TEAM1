const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');

const ActionType = require('./actions');

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
        employeeRole: { type: GraphQLString },
        email: { type: new GraphQLNonNull(GraphQLString) },
        actions: {
            type: new GraphQLList(ActionType),
            resolve: (obj, args, { pgPool }) => {
                return pgdb(pgPool).getEmployeeActions(obj.id);
            }
        }
    }
});
