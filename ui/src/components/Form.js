import React, { Component } from "react";

import { Form, Input, Button } from "antd";

class CustomForm extends Component {

  handleSubmit = values => {
    // event.preventDefault();

    const title = values.title;
    const content = values.content;

    console.log("Ok");
    console.log(title, content);
  };

  componentDidMount() {
    console.log("Ok");
  }

  render() {
    return (
      <Form onFinish={this.handleSubmit}>
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default CustomForm;
