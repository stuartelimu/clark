import React, { Component } from "react";
import axios from "axios";
import {Card, Button} from "antd";

import CustomForm from "../components/Form";


class ArticleDetail extends Component {

  

  constructor(props) {

    super(props);
    this.state = {
    article: {},
  }


  this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`)
      .then(res => {
        this.setState({
          article: res.data
        })
      })
  }

  handleDelete() {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}/`)
    .catch(error => console.error(error));
    // this.props.history.push("/");
  }

  render() {
    return (
    <div>
    <Card title={this.state.article.title}>
  <p>{this.state.article.content}</p>
    </Card>

    <CustomForm requestType="put" buttonText="Update" articleID={this.props.match.params.articleID} />
    <form onSubmit={this.handleDelete}>
      <Button type="danger" htmlType="submit">Delete</Button>
    </form>
    </div>
    );
  }
}

export default ArticleDetail;