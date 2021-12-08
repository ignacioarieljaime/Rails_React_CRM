import React, { useState } from "react";
import CompanyForm from "./CompanyForm";

const Company = (props) => {
  const { company } =  props;
  const [showProspects, setShowProspects] = useState(false);
  const [showCompanyForm, setShowCompanyForm] = useState(false);

  const toggleInfo = () => {
    setShowProspects(!showProspects);
  }

  const toggleCompanyForm = () => {
    setShowCompanyForm(!showCompanyForm);
  };


  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <>
      <div className="p-3 mb-3 border border-gray-300 rounded-md">
        <div className="flex justify-between ">
          <p 
            className="hover:bg-gray-300 font-bold mb-2 py-2 px-5 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            onClick={toggleCompanyForm}
          >
            {capitalize(company.name)}
          </p>
          <button onClick={toggleInfo}><i className={`${showProspects ? "fa fa-minus" : "fa fa-plus"}`}></i></button>
        </div>
        {showProspects &&
          <ul className="ml-2">
            {company.prospects && company.prospects.map(prospect => {
              return <li className="text-sm font-bold ml-3" key={prospect.id}>{`${capitalize(prospect.first_name)} ${capitalize(prospect.last_name)}`} <span className="text-sm text-blue-700 font-normal ml-8 cursor-pointer">{prospect.email}</span></li>
            })}
          </ul>
        }
        {showCompanyForm && <CompanyForm toggleCompanyForm={toggleCompanyForm} company={company} />}
      </div>
    </>
  );
};

export default Company;