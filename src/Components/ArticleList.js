import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

class ArticleList extends Component {

    state={
      articles:[]
    }


  componentDidMount(){
    fetch('http://localhost:4545/blog/articles/')
    .then(res => res.json())
    .then(body => this.setState({articles:body.docs}))
    .catch(err => { throw err})
  }

  render(){
    return(
        <div className="card-container">
          {this.state.articles.map((article, index) =>

            <div key={index} className="card" style={{width: 40 + "rem", height: 24 + "rem"}}>
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.text}</p>
                <Link to={{pathname:`/articles/${article._id}`, state:{article}}} className="btn bg-warning text-dark">Check it out!</Link>
              </div>
            </div>
          )}
        </div>
    )

  };
}



export default ArticleList
