import gql from 'graphql-tag';

// Remeber to wrap queries in back ticks ``

const getUsersQuery = gql`
    query UserQuery {
        Users {
            fullName
            email
            department
            id
            active
            apikey
        }
    }
`;

const getDeptQuery = gql`
    query GetDeptQuery {
        Depts {
            department
        }
    }
`;

const addNewUserMutation = gql`
    mutation(
        $first_name: String
        $last_name: String
        $department: String
        $email: String!
        $apikey: String
    ) {
        addNewUser(
            first_name: $first_name
            last_name: $last_name
            department: $department
            email: $email
            apikey: $apikey
        ) {
            fullName
        }
    }
`;


const addNewEmployeeMutation = gql`
    mutation(
        $first_name: String
        $last_name: String
        $employee_role: String
        $email: String!
    ) {
        addNewEmployee(
            first_name: $first_name
            last_name: $last_name
            employee_role: $employee_role
            email: $email
        ) {
            fullName
        }
    }
`;

export { getUsersQuery, getDeptQuery, addNewUserMutation, addNewEmployeeMutation };
