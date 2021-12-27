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
    <div className="h-screen lg:flex items-start lg:mt-0 px-6 py-3 lg:pt-6 mb-64 lg:-mb-16">
      <div className="flex flex-col justify-center items-center lg:w-1/2 mt-5 lg:pt-10 pb-6 border-dashed lg:border-none border-b-2 border-gray-400">
        <div className="w-full lg:mt-0 mb-6 lg:mb-12 sm:flex justify-center lg:h-3/5">
          {!showProspectForm && <Button onClick={toggleProspectForm} name="New Prospect" />}
          {showProspectForm && <CloseButton onClick={toggleProspectForm}  />}
        </div>
        {showProspectForm && <NewProspectForm toggleProspectForm={toggleProspectForm} />}
        <Prospects prospects={prospects} />
      </div>

      <div className="lg:w-1/2 mt-6 pb-6 lg:pt-0 lg:mt-20">
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
