import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./store/utils/thunkCreators";

import Login from './Login';
import { Home } from './components';

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
    }
  }, [user.error])

  if (props.user.isFetching) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={(routerProps) => (props.user && props.user.id ? <Home user={props.user} /> : <Login />)}
        />
        <Route path="/home" render={(routerProps) => (<Home user={props.user} />)} />
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