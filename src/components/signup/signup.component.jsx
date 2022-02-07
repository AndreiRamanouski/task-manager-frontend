import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "../button/button.component";
import "./signup.style.scss";

import UserDataService from "../../api/user/UserDataService";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successfulRegistration: false,
      userName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      organizationName: "",
      phoneNumber: "",
      defaultPassword: "",
      countryName: "",
      streetName: "",
    };
  }

  handleSubmit = async (event) => {
    const {
      userName,
      lastName,
      email,
      password,
      organizationName,
      phoneNumber,
      defaultPassword,
      countryName,
      streetName,
    } = event;

    let userAndOrganization = {
      userName: userName,
      lastName: lastName,
      email: email,
      password: password,
      organization: {
        organizationName: organizationName,
        phoneNumber: phoneNumber,
        defaultPassword: defaultPassword,
        address: {
          countryName: countryName,
          streetName: streetName,
        },
      },
    };
    console.log(userAndOrganization);

    UserDataService.createUserAndOrganization(userAndOrganization)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.status);
          this.props.setIsNewUser(false);
        }
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  validate = (values) => {
    let errors = {};
    if (values.password !== values.confirmPassword) {
      errors.password = "Passwords should match";
      values.password = "";
      values.confirmPassword = "";
    }
    if (values.password < 6) {
      errors.password = "Password should be longer than 6 letters";
      values.password = "";
      values.confirmPassword = "";
    }
    return errors;
  };

  render() {
    let {
      userName,
      lastName,
      email,
      password,
      confirmPassword,
      organizationName,
      phoneNumber,
      defaultPassword,
      countryName,
      streetName,
    } = this.state;
    return (
      <div className="sign-up">
        <span className="title">Create a company and an account</span>
        <div>
          <Formik
            initialValues={{
              userName,
              lastName,
              email,
              password,
              confirmPassword,
              organizationName,
              phoneNumber,
              defaultPassword,
              countryName,
              streetName,
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
                <label className="form-input-label">Your username: </label>
              </fieldset>
              <fieldset className="group">
                <Field
                  className="form-input"
                  type="text"
                  name="lastName"
                  required
                />
                <label className="form-input-label">Your last name: </label>
              </fieldset>
              <fieldset className="group">
                <Field
                  className="form-input"
                  type="email"
                  name="email"
                  required
                />
                <label className="form-input-label">Your email: </label>
              </fieldset>
              <fieldset className="group">
                <Field
                  className="form-input"
                  type="text"
                  name="organizationName"
                  required
                />
                <label className="form-input-label">
                  Enter the name of your organization:{" "}
                </label>
              </fieldset>
              <fieldset className="group">
                <Field
                  className="form-input"
                  type="text"
                  name="phoneNumber"
                  required
                />
                <label className="form-input-label">
                  Organization's phone number:{" "}
                </label>
              </fieldset>
              <fieldset className="group">
                <Field
                  className="form-input"
                  type="text"
                  name="countryName"
                  required
                />
                <label className="form-input-label">
                  Organization's County:{" "}
                </label>
              </fieldset>
              <fieldset className="group">
                <Field
                  className="form-input"
                  type="text"
                  name="streetName"
                  required
                />
                <label className="form-input-label">
                  Organization's Street name:{" "}
                </label>
              </fieldset>
              <fieldset className="group">
                <Field
                  className="form-input"
                  type="text"
                  name="defaultPassword"
                  required
                />
                <label className="form-input-label">
                  Default password for any new user in your organization:{" "}
                </label>
              </fieldset>
              <ErrorMessage
                style={{ color: "red" }}
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
                <label className="form-input-label">
                  Enter your password:{" "}
                </label>
              </fieldset>
              <fieldset className="group">
                <Field
                  className="form-input"
                  type="password"
                  name="confirmPassword"
                  required
                />
                <label className="form-input-label">
                  Confirm the password:{" "}
                </label>
              </fieldset>

              <Button buttonText="Create Account" color="green" type="submit" />
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

export default SignUp;
