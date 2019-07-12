import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { getCategories } from "../../services/fakeCategoryService";
class AddProduct extends Form {
  state = {
    data: {
      name: "",
      price: "",
      category: ""
    },
    categories: [],
    errors: {}
  };
  componentDidMount() {
    let allCategories = [];
    if (this.props.location.state && this.props.location.state.categories) {
      allCategories = this.props.location.state.categories;
    } else {
      const { data: categories } = getCategories();
      allCategories = categories;
    }
    const categories = allCategories
      .filter(c => c._id)
      .map(c => ({ name: c.name, value: c._id }));
    this.setState({ categories });
  }
  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    price: Joi.number()
      .required()
      .label("Price"),
    category: Joi.string()
      .required()
      .label("Category")
  };
  doSubmit = () => {
    console.log("submitted and calling backend", this.state.data);
    this.props.history.push("/products");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name", true)}
          {this.renderInput("price", "Price", false)}
          {this.renderSelect("category", "Category", this.state.categories)}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default AddProduct;
