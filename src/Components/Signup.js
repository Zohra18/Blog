import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="wrapperAuth">
          <h3 id="signuptitle">SIGN UP TO CHECK EVEN MORE GOOD POSTS!</h3>
            <form method="POST" action="http://localhost:4545/blog/users/signup">
              <div className="form-group" style={{width: 40 + "rem"}}>
                <label>Firstname</label>
                <input name="firstName" type="text" className="form-control" placeholder="Bob"></input>
              </div>

              <div className="form-group" style={{width: 40 + "rem"}}>
                <label>Lastname</label>
                <input name="lastName" type="text" className="form-control" placeholder="Sponge"></input>
              </div>

              <div className="form-group" style={{width: 40 + "rem"}}>
                <label>Email</label>
                <input name="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Email@example.com"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div className="form-group" style={{width: 40 + "rem"}}>
                <label>Password</label>
                <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="P@ssword"></input>
              </div>

              <Link to='/users/welcome' className="btn bg-warning text-dark">Sign Up!</Link>

            </form>

        </div>
    )
}

export default Signup
