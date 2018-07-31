import React from 'react'

const Login = () => {
    return (
      <form className="form-inline" method="POST" action="http://localhost:4545/blog/users/login">
        <div className="form-group mb-2 bg-faded">
          <label className="sr-only">Email</label>
          <input type="text" className="form-control-plaintext text-white" id="staticEmail2" placeholder="email@example.com"></input>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label className="sr-only">Password</label>
          <input type="password" className="form-control" id="inputPassword2" placeholder="Password"></input>
        </div>
        <button type="submit" className="btn bg-warning mb-2">Login</button>
      </form>
    )
}

export default Login
