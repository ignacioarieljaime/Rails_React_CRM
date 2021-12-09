import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./store/utils/thunkCreators";

import Login from './Login';
import { Home } from './components';
import { Companies } from "./components/Companies";

const Routes = (props) => {
  const { user, fetchUser } = props;
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (user.error) {
      // check to make sure error is what we expect, in case we get an unexpected server error object
      if (typeof user.error === "string") {
        setErrorMessage(user.error)
      } else {
        setErrorMessage("Internal Server Error. Please try again");
      }
    } else {
      setErrorMessage("");
    }
  }, [user.error])

  if (props.user.isFetching) {
    return <div className="text-center mt-32">Loading...</div>
  }
  
  return (
    <>
      {errorMessage !== "" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}     
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={(routerProps) => (props.user && props.user.id ? <Home /> : <Login />)}
        />
        <Route path="/home" component={Home} />
        <Route path="/companies" component={Companies} />
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser() {
      dispatch(fetchUser());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));