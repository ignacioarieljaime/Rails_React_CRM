import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProspects, fetchCompanies } from "../store/utils/thunkCreators";

import { Prospects, NewProspectForm } from "./Prospects"
import { Funnel } from "./Funnel";
import { Button } from "."
import { CloseButton } from ".";

const Home = (props) => {
  const { fetchProspects, fetchCompanies, user, prospects} = props;
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

  return (
    <div className="h-screen sm:flex px-6 py-3 sm:mt-8">
      <div className="h-5/6 flex flex-col justify-center items-center sm:w-1/2 border-dashed sm:border-solid border-b-2 sm:border-b-0 sm:border-r-2 border-gray-400">
        <div className="w-full mt-2 mb-5 sm:mb-12 sm:flex justify-center">
          {!showProspectForm && <Button onClick={toggleProspectForm} name="New Prospect" />}
          {showProspectForm && <CloseButton onClick={toggleProspectForm}  />}
        </div>
        {showProspectForm && <NewProspectForm toggleProspectForm={toggleProspectForm} />}
        <Prospects prospects={prospects} />
      </div>

      <div className="sm:h-5/6 flex flex-col justify-center items-center sm:w-1/2 p-6 sm:pt-0">
        <Funnel />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    prospects: state.prospects,
  }
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
