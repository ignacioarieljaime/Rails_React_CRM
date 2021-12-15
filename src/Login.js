
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { login } from './store/utils/thunkCreators';

const Login = (props) => {
  const { user, login } = props;
  const [email, setEmail] = useState("demo@user.com");
  const [password, setPassword] = useState("dslkfjdjfdk123#");

  const handleLogin = async (event) => {
    event.preventDefault();
    await login({ email, password })
  }

  if (user && user.id) {
    return <Redirect to="/home" />
  }

  return (
    <div className="container mx-auto w-4/5 sm:w-2/4 lg:w-1/4 mt-48">
      <h3 className="text-center text-lg mb-4 font-semibold">Log In using the demo account below</h3>

      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="email" 
            name="email" 
            type="text" 
            placeholder="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            name="password" 
            type="password" 
            placeholder="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <a className="hidden sm:inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
            Forgot Password?
          </a>
        </div>
      </form>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);