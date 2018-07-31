import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

//  <a href='http://localhost:3000/articles/addArticles'>Add Articles</a>
//  <a href='http://localhost:3000/users/profile'>Profile</a>
/* <a href='http://localhost:3000/'>Home</a>
<a href='http://localhost:3000/articles'>All Articles</a>
<a href='http://localhost:3000/users/signup'>Sign up</a> */


const NavBar = () => {
    return(
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Story Telling</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to='/'>Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/articles'>All Articles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/users/signup'>Sign Up?</Link>
            </li>
          </ul>
        </div>
        <Login/>
      </nav>
    </div>
  )
}

export default NavBar
