import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Container, Form, Col, Button } from "react-bootstrap";
import axios from "axios";
// import TabPane from 'react-bootstrap/TabPane'

import "../../../style/AddNewProduct.css";
export default class AddNewProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product_name: "",
      product_description: "",
      product_category: "",
      product_sub_category: "",
      brand_name: "",
      product_mrp: "",
      product_selling_price: "",
      product_sku: "",
      product_tracking: "",
      product_stock: "",
      product_basic_image: "",
      product_aditional_image: "",
      product_quantity: "",
      product_weight: "",
      product_size: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("#".this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const {
      product_name,
      product_description,
      product_category,
      product_sub_category,
      brand_name,
      product_mrp,
      product_selling_price,
      product_sku,
      product_tracking,
      product_stock,
      product_basic_image,
      product_aditional_image,
      product_quantity,
      product_weight,
      product_size,
    } = this.state;
    return (
      <Container fluid className="add-product-body">
        <div className="product-add-top-header">
          <p className="product-add-top-p1">Product</p>
          <p className="product-add-top-p2">Product / Save product</p>
        </div>
        <div className="add-new-products-tabs">
          {/* <div className="pb-2 ">
                    <p className="save-product-text">Save Products</p>
                </div> */}
          <form onSubmit={this.submitHandler}>
            <Tabs
              defaultActiveKey="general"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="general" title="General">
                <div className="tab-tag">
                  <h3>General</h3>
                </div>

                <Form.Group controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    placeholder="Name"
                    name="product_name"
                    value={product_name}
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="short description about product"
                    name="product_description"
                    value={product_description}
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="Choose..."
                      name="product_category"
                      value={product_category}
                      onChange={this.changeHandler}
                    >
                      <option>Choose...</option>
                      <option>Shirt</option>
                      <option>Pant</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridSubCategory">
                    <Form.Label>Sub Category</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="Choose..."
                      name="product_sub_category"
                      value={product_sub_category}
                      onChange={this.changeHandler}
                    >
                      <option>Choose...</option>
                      <option>full shirt</option>
                      <option>formal pant</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                      name="brand_name"
                      value={brand_name}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>
                </Form.Row>
              </Tab>
              <Tab eventKey="price" title="Price">
                <div className="tab-tag">
                  <h3>Price</h3>
                </div>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridMRP">
                    <Form.Label>MRP</Form.Label>
                    <Form.Control
                      placeholder="MRP"
                      name="product_mrp"
                      value={product_mrp}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridSellingPrice">
                    <Form.Label>Selling Price</Form.Label>
                    <Form.Control
                      placeholder="selling price"
                      name="product_selling_price"
                      value={product_selling_price}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>
                </Form.Row>
              </Tab>
              <Tab eventKey="inventory" title="Inventory">
                <div className="tab-tag">
                  <h3>Inventory</h3>
                </div>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridSKU">
                    <Form.Label>SKU</Form.Label>
                    <Form.Control
                      placeholder="SKU"
                      name="product_sku"
                      value={product_sku}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridInventoryManagement">
                    <Form.Label>Inventory Management</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="Choose..."
                      name="product_tracking"
                      value={product_tracking}
                      onChange={this.changeHandler}
                    >
                      <option>Choose...</option>
                      <option>Don't Track inventory</option>
                      <option>Track inventory</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formSpecialStockAvailability">
                    <Form.Label>Stock Availability</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="Choose..."
                      name="product_stock"
                      value={product_stock}
                      onChange={this.changeHandler}
                    >
                      <option>Choose...</option>
                      <option>In Stock</option>
                      <option>Out Of Stock</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Tab>
              <Tab eventKey="image" title="Image">
                <div className="tab-tag">
                  <h3>product Image</h3>
                </div>
                <div className="pb-5">
                  <Form.File
                    id="custom-file"
                    label="Basic Image"
                    className="single-product-image"
                    name="product_basic_image"
                    value={product_basic_image}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="pb-5">
                  <Form.File
                    id="custom-file"
                    label="Aditional Image"
                    className="single-product-image"
                    name="product_aditional_image"
                    value={product_aditional_image}
                    onChange={this.changeHandler}
                  />
                </div>
              </Tab>
              <Tab eventKey="attribute" title="Attribute">
                <div className="tab-tag">
                  <h3>Attribute</h3>
                  <Form.Row>
                    <Form.Group as={Col} controlId="Quantity">
                      <Form.Label>Quantity:</Form.Label>
                      <Form.Control
                        placeholder="Quantity"
                        name="product_quantity"
                        value={product_quantity}
                        onChange={this.changeHandler}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Weight">
                      <Form.Label>Weight</Form.Label>
                      <Form.Control
                        placeholder="Weight"
                        name="product_weight"
                        value={product_weight}
                        onChange={this.changeHandler}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="Size">
                      <Form.Label>Size</Form.Label>
                      <Form.Control
                        placeholder="Size"
                        name="product_size"
                        value={product_size}
                        onChange={this.changeHandler}
                      />
                    </Form.Group>
                  </Form.Row>
                  <div>
                    {/* <input type="submit" name="submit" value="Add Product" className="btn btn-primary mt-5" /> */}
                    <Button type="submit" className="mt-5">
                      Add Product
                    </Button>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </form>
        </div>
      </Container>
    );
  }
}
