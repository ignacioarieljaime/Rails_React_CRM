import React, { useState } from "react";
import { connect } from "react-redux";

import Company from "./Company";
import CompanyForm from "./CompanyForm";
import { Button } from "..";
import { CloseButton } from "..";

const Companies = (props) => {
  const { companies } = props;
  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const [searchString, setSearchString] = useState("");

  const toggleCompanyForm = () => {
    setShowCompanyForm(!showCompanyForm);
  };

  let filteredCompanies = !searchString
   ? companies
   : companies.filter(company => {
     return (
       company.name.toLowerCase().includes(searchString.toLowerCase()) 
     );
   });
   
  return (
    <div className="h-screen flex flex-col justify-center items-center px-6">
      <div className="w-full sm:w-8/12 mt-2 mb-5 sm:mb-12 sm:flex justify-center">
        {!showCompanyForm && <Button onClick={toggleCompanyForm} name="New Company" />}
        {showCompanyForm && <CloseButton onClick={toggleCompanyForm}/>}
      </div>
      {showCompanyForm && <CompanyForm toggleCompanyForm={toggleCompanyForm}/>}

      <div className="container prospects-wrapper mx-auto h-3/4 w-11/12 sm:w-6/12 border-black bg-gray-200 p-6 rounded-md shadow-lg overflow-x-hidden overflow-y-scroll">
        <div className="p-1 mb-3 border border-gray-300 rounded-md">
          <input 
            className="appearance-none  border-none w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none" 
            placeholder="Search by Company name"
            value={searchString} 
            onChange={e => setSearchString(e.target.value)} 
          />
        </div>
        <ul>
          {filteredCompanies.map((company) => {
            return <Company toggleCompanyForm={toggleCompanyForm} key={company.id} company={company} />
          })}
        </ul>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    companies: state.companies
  }
}

export default connect(mapStateToProps, null)(Companies);