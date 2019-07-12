import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      name: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .max(10)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };
  doSubmit = () => {
    console.log("submitted and calling backend", this.state.data);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", true)}
          {this.renderInput("password", "Password", false, "password")}
          {this.renderInput("name", "Name", true)}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
