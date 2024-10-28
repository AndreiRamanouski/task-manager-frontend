import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '../button/button.component';
import './signup-without-company.style.scss';

import UserDataService from '../../api/user/UserDataService';

class SignUpWithoutCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successfulRegistration: false,
      userName: '',
      lastName: '',
      email: '',
    };
  }

  handleSubmit = async (event) => {
    const { userName, lastName, email } = event;

    let userWithoutOrganization = {
      userName: userName,
      lastName: lastName,
      email: email,
    };
    console.log(userWithoutOrganization);

    // UserDataService.createUserWithoutOrganization(userWithoutOrganization)
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));
    this.props.navigate('/');
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validate = (values) => {
    let errors = {};
  };

  render() {
    let { userName, lastName, email } = this.state;
    return (
      <div className="sign-up">
        <span className="title">Add a user to your company</span>
        <div>
          <Formik
            initialValues={{
              userName,
              lastName,
              email,
            }}
            onSubmit={this.handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            <Form>
              <fieldset className="group">
                <Field
                  className="form-input"
                  type="text"
                  name="userName"
                  required
                />
                <label className="form-input-label">Username: </label>
              </fieldset>
              <fieldset className="group">
                <Field
                  className="form-input"
                  type="text"
                  name="lastName"
                  required
                />
                <label className="form-input-label">Last name: </label>
              </fieldset>
              <fieldset className="group">
                <Field
                  className="form-input"
                  type="email"
                  name="email"
                  required
                />
                <label className="form-input-label">Email: </label>
              </fieldset>

              <Button buttonText="Create Account" color="green" type="submit" />
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

export default SignUpWithoutCompany;
