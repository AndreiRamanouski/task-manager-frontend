import React from "react";
import "./signin.style.scss";
import Button from "../button/button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    console.log(email, password);
    this.setState({
        password:''
    })
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="title"> Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          
          <div className="group">
            <input
              className="form-input"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label className="form-input-label">Email: </label>
          </div>
          <div className="group">
            <input
              className="form-input"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label className="form-input-label">Password: </label>
          </div>
          <div className="buttons">
            <Button color="DarkSeaGreen" buttonText="sign in" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
