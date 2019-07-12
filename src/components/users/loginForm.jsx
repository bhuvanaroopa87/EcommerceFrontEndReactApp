import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(8)
      .label("Password")
  };
  //input values by ref
  //username = React.createRef();

  doSubmit = () => {
    console.log("submitted and calling backend", this.state.data);
  };

  //applying focus to your element using focus
  //componentDidMount() {
  //this.username.current.focus();
  //}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", true)}
          {this.renderInput("password", "Password", false, "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
