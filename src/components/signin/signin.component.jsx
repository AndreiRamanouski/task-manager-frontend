import React from 'react';
import './signin.style.scss';
import Button from '../button/button.component';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import UserDataService from '../../api/user/UserDataService';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    let { email, password } = event;
    let userLoginRequestModel = {
      email: email,
      password: password,
    };

    await UserDataService.signIn(userLoginRequestModel)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          UserDataService.registerSuccessfulLogin(email, response.data);
          UserDataService.getUserInfo()
            .then((response) =>
              UserDataService.registerUserIDAndOrganizationID(
                response.data.userID,
                response.data.organizationID,
              ),
            )
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
    this.props.navigate('/tasks');
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(event.password);
  };

  validate = (values) => {
    let errors = {};
    if (values.password < 6) {
      errors.password = 'Password should be longer than 6 letters';
      values.password = '';
    }
    return errors;
  };

  render() {
    let { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="title"> Sign in with you email and password</span>

        <Formik
          initialValues={{
            email,
            password,
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
                type="email"
                name="email"
                required
              />
              <label className="form-input-label">Your email: </label>
            </fieldset>

            <ErrorMessage
              style={{ color: 'red' }}
              name="password"
              component="div"
              className="title"
            ></ErrorMessage>
            <fieldset className="group">
              <Field
                className="form-input"
                type="password"
                name="password"
                required
              />
              <label className="form-input-label">Enter your password: </label>
            </fieldset>
            <Button buttonText="Sign in" color="green" type="submit" />
          </Form>
        </Formik>
      </div>
    );
  }
}

export default SignIn;
