import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { fetchProspects, fetchCompanies } from "../store/utils/thunkCreators";

import { Prospects, NewProspectForm } from "./Prospects"
import CloseButton from "./CloseButton";

const prospects = state => state.prospects;
const companies = state => state.companies;

const Home = (props) => {
  const prospectsList = useSelector(prospects);
  const companiesList = useSelector(companies);

  const { fetchProspects, fetchCompanies, user } = props;
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
        { showProspectForm && <NewProspectForm companies={companiesList} /> }
        <Prospects companies={companiesList} prospects={prospectsList} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}


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