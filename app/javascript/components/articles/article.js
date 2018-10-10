import React, { Component, Fragment } from 'react'

class Article extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
      this.fetchPosts()
  }

  fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then( res => res.json() )
      .then( posts => this.setState({ articles: posts }) )
  }

  render() {
    return (
      <Fragment >
        {this.state.articles.map(
          (article, index) => <li key={index}>
            <p>id: {article.id}</p>
            <p>title: {article.title}</p>
            <p>body: {article.body}</p>
          </li>
        )}
      </Fragment>
    )
  }
}

export default Article