import React, { useState } from "react";
import { EditProspectForm } from "./";
import CompanyForm from "../Companies/CompanyForm";


const Prospect = (props) => {
  const { prospect } = props;
  const [compName, setCompName] = useState(prospect.company && prospect.company.name || "");
  const [prospectCompany, setProspectCompany] = useState(prospect.company);
  const [displayProspectInfo, setDisplayProspectInfo] = useState(false);
  const [showEditProspectForm, setShowEditProspectForm] = useState(false);
  const [showCompanyForm, setShowCompanyForm] = useState(false);

  const toggleEditProspectForm = () => {
    setShowEditProspectForm(!showEditProspectForm);
  };

  const toggleInfo = () => {
    setDisplayProspectInfo(!displayProspectInfo);
  };

  const toggleCompanyForm = () => {
    setShowCompanyForm(!showCompanyForm);
  };

  const editCompanyName = (name) => {
    setCompName(name);
  }

  const editProspectCompany = () => {
    setProspectCompany(null);
  }

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <>
     {showEditProspectForm && <EditProspectForm prospect={prospect} toggleEditProspectForm={toggleEditProspectForm} />}
    <div className="p-3 mb-3 border border-gray-300 rounded-md">
      <div className="flex justify-between ">
        <button 
          onClick={toggleEditProspectForm} 
          className="hover:bg-gray-300 font-bold mb-2 py-2 px-5 rounded focus:outline-none focus:shadow-outline"
        >
          {`${capitalize(prospect.first_name)} ${capitalize(prospect.last_name)}`}
        </button>
        <button onClick={toggleInfo}><i className={`${displayProspectInfo ? "fa fa-minus" : "fa fa-plus"}`}></i></button>
      </div>
      <h5 className="text-sm ml-3 mb-3">Current Stage: <span className="font-bold">{capitalize(prospect.stage)}</span></h5>
      {displayProspectInfo &&
        <ul className="text-sm">
          <li className="px-2" key={`${prospect.id}-email`}><span className="font-bold">Email:</span> {prospect.email}</li>
          <li className="px-2" key={`${prospect.id}-phone`}><span className="font-bold">Phone:</span> {prospect.phone && prospect.phone}</li>
          {prospectCompany && <li onClick={toggleCompanyForm} className="hover:bg-gray-300 cursor-pointer px-2 rounded" key={`${prospect.id}-company`}><span className="font-bold">Company:</span> {capitalize(compName)}</li>}
          <li className="px-2" key={`${prospect.id}-probability`}><span className="font-bold">Probability:</span> {prospect.probability && prospect.probability}</li>
        </ul>
      }
      {showCompanyForm && <CompanyForm editCompanyName={editCompanyName} toggleCompanyForm={toggleCompanyForm} editProspectCompany={editProspectCompany} company={prospect.company} />}
    </div>
    </>
  )
};

export default Prospect;