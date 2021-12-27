import React, { useState } from "react";
import Prospect from "./Prospect";
import "./prospects.css";

const Prospects = (props) => {
 const { prospects } = props;
 const [searchString, setSearchString] = useState("");

 let filteredProspects = !searchString
  ? prospects
  : prospects.filter(prospect => {
    return (
      `${prospect.first_name} ${prospect.last_name}`.toLowerCase().includes(searchString.toLowerCase()) ||
      prospect.stage.toLowerCase().includes(searchString.toLowerCase())
    );
  });
  
  return (
    <div id="prospects-container" className="container prospects-wrapper mx-auto mb-6 h-96 w-full sm:w-9/12 sm:mt-0 border-black bg-gray-200 p-6 rounded-md shadow-lg overflow-x-hidden overflow-y-scroll">
      <div className="p-1 mb-3 border border-gray-300 rounded-md">
        <input 
          className="appearance-none  border-none w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none" 
          placeholder="Search"
          value={searchString} 
          onChange={e => setSearchString(e.target.value)} 
        />
      </div>
      {filteredProspects.map((prospect) => {
        return <Prospect  key={prospect.id} prospect={prospect} />
      })}
    </div>
  )
};

export default Prospects;