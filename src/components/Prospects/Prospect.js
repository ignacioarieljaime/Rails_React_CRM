import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EditProspectForm } from "./";
 
const Prospect = (props) => {
  const { prospect, companies } = props;
  const [displayProspectInfo, setDisplayProspectInfo] = useState(false);
  const [showEditProspectForm, setShowEditProspectForm] = useState(false);

  const toggleEditProspectForm = () => {
    setShowEditProspectForm(!showEditProspectForm);
  };

  const toggleInfo = () => {
    setDisplayProspectInfo(!displayProspectInfo);
  };

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <>
     {showEditProspectForm && <EditProspectForm prospect={prospect} companies={companies} toggleEditProspectForm={toggleEditProspectForm} />}
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
          <li key={`${prospect.id}-email`}><span className="font-bold">Email:</span> {prospect.email}</li>
          <li key={`${prospect.id}-phone`}><span className="font-bold">Phone:</span> {prospect.phone && prospect.phone}</li>
          <li key={`${prospect.id}-company`}><span className="font-bold">Company:</span> {prospect.company && capitalize(prospect.company.name)}</li>
          <li key={`${prospect.id}-probability`}><span className="font-bold">Probability:</span> {prospect.probability && prospect.probability}</li>
        </ul>
      }
    </div>
    </>
  )
};

export default Prospect;