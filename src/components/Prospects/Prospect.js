import React, { useState } from "react";
import { EditProspectForm } from "./";

const Prospect = (props) => {
  const { prospect } = props;
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
     {showEditProspectForm && <EditProspectForm prospect={prospect} toggleEditProspectForm={toggleEditProspectForm} />}
    <div className="p-3 mb-3 border border-gray-300 rounded-md">
      <div className="flex justify-between ">
        <h5 
          onClick={toggleEditProspectForm} 
          className="hover:bg-gray-300 font-bold mb-2 py-2 px-5 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        >
          {prospect && `${capitalize(prospect.first_name)} ${capitalize(prospect.last_name)}`}
        </h5>
        <button onClick={toggleInfo}><i className={`${displayProspectInfo ? "fa fa-minus" : "fa fa-plus"}`}></i></button>
      </div>
      <h5 className="text-sm ml-4 mb-3">Current Stage: <span className="font-bold">{prospect && capitalize(prospect.stage)}</span></h5>
      {displayProspectInfo &&
        <ul className="text-sm ml-2">
          <li className="px-2" key={`${prospect.id}-email`}><span className="font-bold">Email:</span> {prospect.email}</li>
          <li className="px-2" key={`${prospect.id}-phone`}><span className="font-bold">Phone:</span> {prospect.phone && prospect.phone}</li>
          <li className="px-2" key={`${prospect.id}-company`}><span className="font-bold">Company:</span> {prospect.company && capitalize(prospect.company.name)}</li>
          <li className="px-2" key={`${prospect.id}-probability`}><span className="font-bold">Probability:</span> {prospect.probability && prospect.probability}</li>
        </ul>
      }
    </div>
    </>
  )
};

export default Prospect;