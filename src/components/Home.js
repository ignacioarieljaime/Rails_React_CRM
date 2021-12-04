import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProspects, fetchCompanies } from "../store/utils/thunkCreators";

import { Prospects, NewProspectForm } from "./Prospects"

const Home = (props) => {
  const { user, fetchProspects, fetchCompanies, prospects } = props;
  const [showProspectForm, setShowProspectForm] = useState(false);
  
  useEffect(() => {
    fetchProspects();
  }, [fetchProspects]);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  if (!user.id) {
    return <Redirect to="/login" />
  }

  const toggleProspectForm = () => {
    setShowProspectForm(!showProspectForm);
  }

  const Button = (props) => {
    return (
      <button onClick={props.onClick} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        {props.name}
      </button>
    );
  };

  const CloseButton = (props) => {
    return (
      <button onClick={props.onClick} className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-1 rounded-lg focus:outline-none focus:shadow-outline">
        <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
        </svg>
      </button>
    );
  };
 
 
  return (
    <div className="h-screen sm:flex p-6">
      <div className="flex justify-center items-center sm:w-1/2 text-center p-6 border-dashed sm:border-solid border-b-2 sm:border-b-0 sm:border-r-2 border-gray-400">
        SALES FUNNEL
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </div>
      
      <div className="sm:w-1/2">
        <div className="flex items-center justify-between sm:ml-3 mt-6 sm:mt-0 mb-4 sm:mb-12 p-3">
          {!showProspectForm && <Button onClick={toggleProspectForm} name="New Prospect" />}
          {showProspectForm && <CloseButton onClick={toggleProspectForm}  />}
          <Button name="New Company" />
        </div>
        { showProspectForm && <NewProspectForm /> }
        <Prospects prospects={prospects} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    prospects: state.prospects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProspects: () => {
      dispatch(fetchProspects());
    },
    fetchCompanies: () => {
      dispatch(fetchCompanies());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);