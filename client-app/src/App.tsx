import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { PageHeader, List } from 'antd';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/books').then(response => {
      this.setState({
        books: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="task"
        />
        <List>
          {this.state.books.map((books: any) => (
            <List.Item key={books.id}>{books.title}</List.Item>                     
          ))}
        </List>
      </div>
    );
  }
}


export default App;