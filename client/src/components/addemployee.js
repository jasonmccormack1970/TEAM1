import React, { Component } from 'react';
import {addNewEmpMutation } from '../queries/queries';
//import { getDeptQuery, addNewUserMutation } from '../queries/queries';

import { flowRight as compose } from 'lodash';
import { graphql } from 'react-apollo';
//import crypto from 'crypto';

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        // set the initial state of this component
        this.state = {
            firstName: '',
            lastName: '',
            employeeRole: '',
            email: '',
        };
    }

    refreshPage() {
        window.location.reload(true);
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addNewEmpMutation({
            variables: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                employeeRole: this.state.employeeRole,
                email: this.state.email,
                // generate a random API Key code
              //  apikey: crypto.randomBytes(Math.ceil(10 / 2)).toString('hex'),
            },
        });
        // Not best method for performance but OK for a demo
        this.refreshPage();
    }

    render() {
        return (
            <div>
                <form id="addNewEmployee" onSubmit={this.submitForm.bind(this)}>
                    <div className="field">
                        <label>First Name:</label>
                        <br />
                        <input
                            type="text"
                            onChange={(e) => this.setState({ firstName: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <label>Last Name:</label>
                        <br />
                        <input
                            type="text"
                            onChange={(e) => this.setState({ lastName: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <label>Employee Role:</label>
                        <br />
                        <input
                            type="text"
                            onChange={(e) => this.setState({ employeeRole: e.target.value })}
                        />
                    
                    </div>

                    <div className="field">
                        <label>Email Address:</label>
                        <br />
                        <input
                            type="email"
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>

                    <button>(+) Add Employee</button>
                </form>
            </div>
        );
    }
}

// Using compose to bind multiple (queries) to the (component)
export default compose(
   // graphql(getDeptQuery, { name: 'getDeptQuery' }),
    graphql(addNewEmpMutation, { name: 'addNewEmpMutation' }),
)(AddEmployee);
