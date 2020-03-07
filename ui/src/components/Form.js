import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

class CustomForm extends Component {

  handleSubmit = (values, requestType, articleID) => {

    const title = values.title;
    const content = values.content;

    switch(requestType) {
      case "post":
        return axios.post("http://127.0.0.1:8000/api/", {
          title: title,
          content: content
        })
        .then(res => console.log(res))
        .then(res => window.location.reload(true))
        .catch(error => console.err(error));
      case "put":
        return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
          title: title,
          content: content
        })
        .then(res => console.log(res))
        .then(res => window.location.reload(true))
        .catch(error => console.err(error));
    }

    window.location.reload(true);

  };

  componentDidMount() {
    console.log("Ok");
  }

  render() {
    return (
      <Form onFinish={(values) => this.handleSubmit(values, this.props.requestType, this.props.articleID)}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please put a title here!" }]}
        >
          <Input placeholder="Put a title here" />
        </Form.Item>
        <Form.Item
          name="content"
          label="Content"
          rules={[{ required: true, message: "Please create some content!" }]}
        >
          <Input placeholder="Create some content" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {this.props.buttonText}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default CustomForm;
