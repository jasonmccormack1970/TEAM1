import React, { Component } from 'react';
import { addNewEmployeeMutation } from '../queries/queries';
import { flowRight as compose } from 'lodash';
import { graphql } from 'react-apollo';
import crypto from 'crypto';

class AddEmployeeDataTest extends Component {
    constructor(props) {
        super(props);
        // set the inital state of this component
        this.state = {
            first_name: '',
            last_name: '',
            employee_role: '',
            email: '',
        };
    }

    refreshPage() {
        window.location.reload(true);
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addNewEmployeeMutation({
            variables: {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                employee_role: this.state.employee_role,
                email: this.state.email,
                // generate a random API Key code
                // apikey: crypto.randomBytes(Math.ceil(10 / 2)).toString('hex'),
            },
        });
        // Not best method for performance but OK for a demo
        this.refreshPage();
    }

    render() {
        return (
            <div>
                <form id="addEmployee" onSubmit={this.submitForm.bind(this)}>
                    <div className="field">
                        <label>First Name:</label>
                        <br />
                        <input
                            type="text"
                            onChange={(e) => this.setState({ first_name: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <label>Last Name:</label>
                        <br />
                        <input
                            type="text"
                            onChange={(e) => this.setState({ last_name: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <label>Employee Role:</label>
                        <br />
                        <input
                            type="text"
                            onChange={(e) => this.setState({ employee_role: e.target.value })}
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
    graphql(addNewEmployeeMutation, { name: 'addNewEmployeeMutation' }),
)(AddEmployeeDataTest);
