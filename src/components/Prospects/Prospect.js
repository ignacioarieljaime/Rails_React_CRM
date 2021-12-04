import React, { useState } from "react";

const Prospect = (props) => {
  const { prospect } = props;
  const [displayProspectInfo, setDisplayProspectInfo] = useState(false);

  const toggleInfo = () => {
    setDisplayProspectInfo(!displayProspectInfo);
  }

  return (
    <div className="p-3 mb-3 border border-gray-300 rounded-md">
      <div className="flex justify-between ">
        <h2 className="font-bold text-lg">{`${prospect.first_name} ${prospect.last_name}`}</h2>
        <button onClick={toggleInfo}><i className={`${displayProspectInfo ? "fa fa-minus" : "fa fa-plus"}`}></i></button>
      </div>
      <h5 className="text-sm mb-3">Current Stage: <span className="font-bold">{prospect.stage}</span></h5>
      {displayProspectInfo &&
        <ul className="text-sm">
          <li key={`${prospect.id}-email`}><span className="font-bold">Email:</span> {prospect.email}</li>
          <li key={`${prospect.id}-phone`}><span className="font-bold">Phone:</span> {prospect.phone && prospect.phone}</li>
          <li key={`${prospect.id}-company`}><span className="font-bold">Company:</span> {prospect.company && prospect.company.name}</li>
          <li key={`${prospect.id}-probability`}><span className="font-bold">Probability:</span> {prospect.probability && prospect.probability}</li>
        </ul>
      }
    </div>
  )
};

export default Prospect;