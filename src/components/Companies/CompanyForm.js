import React, { useState } from "react";
import { connect } from "react-redux";

import { postCompany, editCompany, destroyCompany } from "../../store/utils/thunkCreators";
import DeleteButton from "../DeleteButton";

const CompanyForm = (props) => {
  const { company, toggleCompanyForm, editCompanyName, postCompany, editCompany, destroyCompany, editProspectCompany } = props;
  const [companyName, setCompanyName] = useState("");

  const handlePostCompany = async (e) => {
    e.preventDefault();
    await postCompany({
      company: { name: companyName }
    });
    setCompanyName("");
  }

  const handleEditCompany = async (e) => {
    e.preventDefault();
    await editCompany({
      company: { name: companyName }
    }, company.id);
    toggleCompanyForm();
    editCompanyName(companyName);
  }

  const handleDeleteCompany = async (e) => {
    e.preventDefault();
    await destroyCompany(company.id);
    toggleCompanyForm();
    editProspectCompany();
  }

  return (
    <form onSubmit={company ? handleEditCompany : handlePostCompany} class="w-full mx-auto mb-3 max-w-lg">
      <div class="flex items-center border-b border-gray-400 py-2 mb-3">
        <input 
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
          type="text" 
          placeholder="Company Name" 
          id="company-name"
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
        />
        <button class="bg-gray-500 hover:bg-gray-700 text-white text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline flex-shrink-0" type="Submit">
          {company ? "Edit" : "Submit"}
        </button>
      </div>
      {company && <DeleteButton buttonName="Delete Company" onClick={handleDeleteCompany} />}
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postCompany: (body) => {
      dispatch(postCompany(body));
    },
    editCompany: (body, id) => {
      dispatch(editCompany(body, id));
    },
    destroyCompany: (id) => {
      dispatch(destroyCompany(id));
    }
  }
}

export default connect(null, mapDispatchToProps)(CompanyForm);
