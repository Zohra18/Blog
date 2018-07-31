import React, { Component } from 'react';
import AddArticle from './Components/AddArticle'
import ArticleList from './Components/ArticleList'
import NavBar from './Components/NavBar'
import Signup from './Components/Signup'
import Login from './Components/Login'
import OneArticle from './Components/OneArticle'
import Welcome from './Components/Welcome'

// REACT ROUTER
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
            <Switch>
              <Route path='/articles' component={ArticleList} />
              <Route path='/articles/addArticles' component={AddArticle} />
              <Route path='/articles/:id' component={OneArticle} />
              <Route path='/users/signup' component={Signup} />
              <Route path='/users/welcome' component={Welcome} />
              <Route path='/users/login' component={Login} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
